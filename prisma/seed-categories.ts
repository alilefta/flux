// /prisma/seed.ts

import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import "dotenv/config";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });

const prisma = new PrismaClient({
	adapter,
});

async function main() {
	// Example: Add default categories to existing servers
	const servers = await prisma.server.findMany();

	for (const server of servers) {
		const hasCategories = await prisma.channelCategory.count({
			where: { serverId: server.id },
		});

		if (hasCategories === 0) {
			// Create default categories
			await prisma.channelCategory.createMany({
				data: [
					{ name: "TEXT CHANNELS", serverId: server.id, position: 0 },
					{ name: "VOICE CHANNELS", serverId: server.id, position: 1 },
				],
			});
		}
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
