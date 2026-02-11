import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });

const prisma = new PrismaClient({
	adapter,
});

async function main() {
	const CHANNEL_ID = "aea61a27-e9f6-4a42-bb6c-ca8e0845e8d8";
	const MEMBER_ID_1 = "a8cf5b9a-8e51-4e23-8b2d-31b595fce4db";
	const MEMBER_ID_2 = "d75e110e-75fc-4244-9ca7-d2fb8240028b";

	// Number of messages to generate
	const COUNT = 150;

	console.log(`🌱 Seeding ${COUNT} messages into channel ${CHANNEL_ID}...`);
	console.log(`🔌 Database URL: ${process.env.DATABASE_URL ? "Found" : "MISSING"}`);
	const messages = [];

	for (let i = 1; i <= COUNT; i++) {
		// We create dates in the past so they appear in chronological order
		// Message 1 = 150 minutes ago
		// Message 150 = 1 minute ago
		const timeOffset = (COUNT - i) * 60 * 1000; // 1 minute intervals
		const createdAt = new Date(Date.now() - timeOffset);

		messages.push({
			content: `Message #${i}: This is a test message to verify infinite scroll behavior.`,
			channelId: CHANNEL_ID,
			memberId: i % 2 === 0 ? MEMBER_ID_1 : MEMBER_ID_2, // Alternate between members
			deleted: false,
			fileUrl: i % 25 === 0 ? "https://github.com/shadcn.png" : null, // Sprinkle some images
			createdAt: createdAt,
			updatedAt: createdAt,
		});
	}

	try {
		await prisma.message.createMany({
			data: messages,
		});
		console.log("✅ Success: Messages seeded.");
	} catch (error) {
		console.error("❌ Error seeding messages:", error);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
