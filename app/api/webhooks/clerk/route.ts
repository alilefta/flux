import { headers } from "next/headers";
import { UserWebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import prisma from "@/lib/prisma";

// Sync Clerk's User creation, updation, and deletion with prisma db's Profile entity
export async function POST(req: Request) {
	// Get webhook secret from Clerk Dashboard
	const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

	if (!WEBHOOK_SECRET) {
		throw new Error("Missing CLERK_WEBHOOK_SECRET");
	}

	// Get headers
	const headerPayload = await headers();
	const svix_id = headerPayload.get("svix-id");
	const svix_timestamp = headerPayload.get("svix-timestamp");
	const svix_signature = headerPayload.get("svix-signature");

	if (!svix_id || !svix_timestamp || !svix_signature) {
		return new Response("Error: Missing svix headers", { status: 400 });
	}

	// Get body
	const payload = await req.json();
	const body = JSON.stringify(payload);

	// Verify webhook
	const wh = new Webhook(WEBHOOK_SECRET);
	let evt: UserWebhookEvent;

	try {
		evt = wh.verify(body, {
			"svix-id": svix_id,
			"svix-timestamp": svix_timestamp,
			"svix-signature": svix_signature,
		}) as UserWebhookEvent;
	} catch (err) {
		console.error("Error verifying webhook:", err);
		return new Response("Error: Verification failed", { status: 400 });
	}

	// Handle the event
	const eventType = evt.type;

	// 🔴 THIS IS THE CRITICAL PART
	if (eventType === "user.created") {
		const { id, email_addresses, image_url, first_name, last_name } = evt.data;

		if (email_addresses.length === 0) {
			console.log("No emails exits! maybe the even is for testing only.");
			return;
		}

		// Create Profile in YOUR database
		await prisma.profile.create({
			data: {
				clerkId: id,
				email: email_addresses[0].email_address,
				name: `${first_name || ""} ${last_name || ""}`.trim() || "User",
				imageUrl: image_url || "",
			},
		});

		console.log(`✅ Profile created for user: ${id}`);
	}

	// Also handle updates
	if (eventType === "user.updated") {
		const { id, email_addresses, image_url, first_name, last_name } = evt.data;

		await prisma.profile.update({
			where: { clerkId: id },
			data: {
				email: email_addresses[0].email_address,
				name: `${first_name || ""} ${last_name || ""}`.trim() || "User",
				imageUrl: image_url || "",
			},
		});

		console.log(`✅ Profile updated for user: ${id}`);
	}

	// Handle user deletion
	if (eventType === "user.deleted") {
		const { id } = evt.data;

		await prisma.profile.delete({
			where: { clerkId: id },
		});

		console.log(`✅ Profile deleted for user: ${id}`);
	}

	return new Response("Webhook processed", { status: 200 });
}
