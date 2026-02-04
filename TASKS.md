# Flux - Task Breakdown

## Week 1: Foundation (Days 1-7)

### Day 1: Project Setup

- [ ] `npx create-next-app@latest flux --typescript --tailwind --app`
- [ ] Install dependencies:

```bash
  npm i @clerk/nextjs @prisma/client prisma
  npm i @tanstack/react-query zustand
  npm i socket.io socket.io-client
  npm i zod react-hook-form @hookform/resolvers
  npm i lucide-react
  npx shadcn@latest init
```

- [ ] Set up Prisma: `npx prisma init`
- [ ] Copy schema from your previous work
- [ ] Connect to Railway/Supabase Postgres
- [ ] `npx prisma migrate dev --name init`
- [ ] Test DB connection

### Day 2: Clerk Auth

- [ ] Create Clerk account → Get API keys
- [ ] Add to `.env.local`:

```
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
  CLERK_SECRET_KEY=
```

- [ ] Wrap app in `<ClerkProvider>`
- [ ] Create middleware.ts for protected routes
- [ ] Test: Sign up, sign in, sign out
- [ ] Create `/api/webhook/clerk` for user sync
- [ ] Test: User creation syncs to Profile table

# Flux: Complete Auth & Server Creation Flow

## The Correct Order of Operations

---

## 🎯 The Problem You're Solving

**Question**: When does Profile get created?
**Answer**: IMMEDIATELY after Clerk authentication, BEFORE user sees anything.

---

## 📊 The Complete Flow (Step-by-Step)

### Flow 1: Brand New User (Never Used Flux Before)

```
1. User visits flux.app
   ↓
2. Clicks "Get Started" → Clerk Modal opens
   ↓
3. User signs up with Google/Email
   ↓
4. Clerk creates auth user
   ↓
5. 🔴 CRITICAL: Clerk webhook fires → /api/webhooks/clerk
   ↓
6. Webhook creates Profile in YOUR database
   ↓
7. User redirected to /setup (now Profile EXISTS)
   ↓
8. User clicks "Create Server"
   ↓
9. Server created → Member created → User redirected to server
```

### Flow 2: Existing User (Already Has Profile)

```
1. User visits flux.app
   ↓
2. Clicks "Sign In" → Clerk Modal
   ↓
3. User signs in
   ↓
4. Check: Does user have servers?
   - YES → Redirect to /servers/[their-first-server-id]
   - NO → Redirect to /setup
```

---

## 🔧 Implementation (Code Walkthrough)

### Step 1: Clerk Webhook (Profile Creation)

Create: `/app/api/webhooks/clerk/route.ts`

```typescript
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
	// Get webhook secret from Clerk Dashboard
	const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

	if (!WEBHOOK_SECRET) {
		throw new Error("Missing CLERK_WEBHOOK_SECRET");
	}

	// Get headers
	const headerPayload = headers();
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
	let evt: WebhookEvent;

	try {
		evt = wh.verify(body, {
			"svix-id": svix_id,
			"svix-timestamp": svix_timestamp,
			"svix-signature": svix_signature,
		}) as WebhookEvent;
	} catch (err) {
		console.error("Error verifying webhook:", err);
		return new Response("Error: Verification failed", { status: 400 });
	}

	// Handle the event
	const eventType = evt.type;

	// 🔴 THIS IS THE CRITICAL PART
	if (eventType === "user.created") {
		const { id, email_addresses, image_url, first_name, last_name } = evt.data;

		// Create Profile in YOUR database
		await prisma.profile.create({
			data: {
				userId: id, // Clerk user ID
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
			where: { userId: id },
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
			where: { userId: id },
		});

		console.log(`✅ Profile deleted for user: ${id}`);
	}

	return new Response("Webhook processed", { status: 200 });
}
```

---

### Step 2: Configure Clerk Webhook

**In Clerk Dashboard:**

1. Go to **Webhooks** (left sidebar)
2. Click **Add Endpoint**
3. Enter URL: `https://your-app.vercel.app/api/webhooks/clerk`
    - For local dev: Use ngrok or Clerk's test mode
4. Subscribe to events:
    - ✅ `user.created`
    - ✅ `user.updated`
    - ✅ `user.deleted`
5. Copy **Signing Secret** → Add to `.env.local`:
    ```
    CLERK_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
    ```

---

### Step 3: Middleware (Route Protection)

Create: `/middleware.ts`

```typescript
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes (don't require auth)
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)", "/api/webhooks(.*)"]);

export default clerkMiddleware((auth, request) => {
	// Allow public routes
	if (isPublicRoute(request)) {
		return NextResponse.next();
	}

	// Protect all other routes
	auth().protect();
});

export const config = {
	matcher: [
		// Skip Next.js internals and static files
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
```

---

### Step 4: Initial Profile Check Helper

Create: `/lib/initial-profile.ts`

```typescript
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function initialProfile() {
	const user = await currentUser();

	if (!user) {
		return redirect("/sign-in");
	}

	// Check if profile exists
	const profile = await prisma.profile.findUnique({
		where: {
			userId: user.id,
		},
	});

	// If profile exists, return it
	if (profile) {
		return profile;
	}

	// 🔴 FALLBACK: If webhook didn't fire (rare), create profile now
	const newProfile = await prisma.profile.create({
		data: {
			userId: user.id,
			name: `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User",
			imageUrl: user.imageUrl || "",
			email: user.emailAddresses[0].email_address,
		},
	});

	return newProfile;
}
```

**Why the fallback?**

- Webhooks can fail (network issues, Clerk downtime)
- This ensures Profile ALWAYS exists when needed
- Safe to call multiple times (won't duplicate)

---

### Step 5: Setup Page (Check for Existing Servers)

Create: `/app/(setup)/setup/page.tsx`

```typescript
import { initialProfile } from "@/lib/initial-profile";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { CreateServerModal } from "@/components/modals/create-server-modal";

export default async function SetupPage() {
  // 1. Get or create profile
  const profile = await initialProfile();

  // 2. Check if user already has a server
  const server = await prisma.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  // 3. If they have a server, redirect to it
  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  // 4. Otherwise, show setup page
  return (
    <div className="flex h-full items-center justify-center">
      <CreateServerModal />
    </div>
  );
}
```

---

### Step 6: Create Server Action (The Heart of the Flow)

Create: `/actions/create-server.ts`

```typescript
"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { MemberRole } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export async function createServer(formData: FormData) {
	const user = await currentUser();

	if (!user) {
		throw new Error("Unauthorized");
	}

	const name = formData.get("name") as string;
	const imageUrl = formData.get("imageUrl") as string;

	if (!name) {
		throw new Error("Server name is required");
	}

	// 1. Find the profile (should exist from webhook or initialProfile)
	const profile = await prisma.profile.findUnique({
		where: { userId: user.id },
	});

	if (!profile) {
		throw new Error("Profile not found");
	}

	// 2. Create server with EVERYTHING in one transaction
	const server = await prisma.server.create({
		data: {
			name,
			imageUrl: imageUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${name}`,
			inviteCode: uuidv4(), // Generate unique invite code
			profileId: profile.id, // Server owner

			// 3. Create default "general" channel
			channels: {
				create: [
					{
						name: "general",
						isDefault: true,
						profileId: profile.id,
					},
				],
			},

			// 4. Create member record (owner as ADMIN)
			members: {
				create: [
					{
						profileId: profile.id,
						role: MemberRole.ADMIN,
					},
				],
			},
		},
	});

	// 5. Redirect to the new server
	redirect(`/servers/${server.id}`);
}
```

**🔥 Key Points:**

1. **Transaction**: Server, Channel, and Member are created together
2. **Atomic**: Either all succeed or all fail (no orphaned records)
3. **Default Channel**: Can't be deleted (isDefault: true)
4. **Owner is ADMIN**: First member has ADMIN role

---

### Step 7: Create Server Modal (UI)

Create: `/components/modals/create-server-modal.tsx`

```typescript
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createServer } from "@/actions/create-server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateServerModal() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    try {
      await createServer(formData);
      // createServer already redirects, so we don't need to do anything here
    } catch (error) {
      console.error(error);
      alert("Failed to create server");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md space-y-6 rounded-lg border bg-card p-8">
      <div>
        <h2 className="text-2xl font-bold">Create Your Server</h2>
        <p className="text-muted-foreground">
          Give your server a personality with a name and an image.
        </p>
      </div>

      <form action={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Server Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="My Awesome Team"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <Label htmlFor="imageUrl">Server Image URL (optional)</Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            placeholder="https://example.com/image.png"
            disabled={isLoading}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Server"}
        </Button>
      </form>
    </div>
  );
}
```

---

## 🔄 Complete Flow Diagram

```
┌─────────────────────────────────────────────────┐
│  1. User Signs Up with Clerk                    │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  2. Clerk Webhook Fires                         │
│     POST /api/webhooks/clerk                    │
│     ✅ Profile Created                          │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  3. User Redirected to /setup                   │
│     - initialProfile() called                   │
│     - Profile found ✅                          │
│     - Check for existing servers                │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  4. User Clicks "Create Server"                 │
│     - Server created                            │
│     - Channel "general" created (isDefault)     │
│     - Member created (ADMIN role)               │
│     - inviteCode generated                      │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  5. Redirect to /servers/[serverId]             │
│     - Server exists ✅                          │
│     - Channel exists ✅                         │
│     - Member exists ✅                          │
│     - User can start chatting!                  │
└─────────────────────────────────────────────────┘
```

---

## ❓ FAQ: Your Specific Questions

### Q1: "Create Profile first or later?"

**Answer**: First! Via Clerk webhook BEFORE user sees /setup.

### Q2: "Server has members which need Profile?"

**Answer**: Yes! That's why Profile is created by webhook FIRST.

### Q3: "Profile has required Conversation/DirectMessage relations?"

**Answer**: These are OPTIONAL relations. Profile can exist without them.

Looking at your schema:

```prisma
model Profile {
  conversationsInitiated Conversation[] @relation("MemberOne")
  conversationsReceived  Conversation[] @relation("MemberTwo")
  directMessages         DirectMessage[]
}
```

These are arrays (`[]`) which means:

- Profile can have ZERO conversations
- Profile can have ZERO direct messages
- They're created LATER when user actually DMs someone

**NOT required at Profile creation time.**

---

## 🧪 Testing the Flow

### Test 1: New User

1. Open incognito window
2. Go to your app
3. Sign up with Clerk
4. Check database: Profile should exist
5. Should see /setup page
6. Create server → Should redirect to server page

### Test 2: Existing User

1. Sign in again
2. Should redirect directly to your server (skip /setup)

### Test 3: Webhook Failure Fallback

1. Disable webhook in Clerk
2. Sign up
3. initialProfile() should create Profile as fallback
4. Everything still works

---

## 📝 Environment Variables Checklist

Create `.env.local`:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
CLERK_WEBHOOK_SECRET=whsec_xxxxx

# Database
DATABASE_URL=postgresql://user:password@host:5432/flux

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🚀 Your Next Actions (Today)

1. ✅ Install dependencies:

    ```bash
    npm i @clerk/nextjs svix
    ```

2. ✅ Create webhook route: `/app/api/webhooks/clerk/route.ts`

3. ✅ Set up Clerk webhook in dashboard

4. ✅ Create `initialProfile()` helper

5. ✅ Create `/setup` page

6. ✅ Create `createServer()` action

7. ✅ Test the complete flow

---

## 💡 Pro Tips

1. **Always use transactions** when creating related records
2. **Webhook fallback** is critical (webhooks can fail)
3. **Redirect after mutations** to prevent double-submissions
4. **Log everything** during development:
    ```typescript
    console.log("✅ Profile created:", profile.id);
    console.log("✅ Server created:", server.id);
    ```

---

You now have the COMPLETE flow. No guessing, no confusion.

**Next step**: Implement the webhook route and test it!

Report back when webhook is working and Profile is created automatically. 🚀

### Day 3: Initial Server Setup

- [ ] Create `/setup` page (onboarding)
- [ ] Build "Create Server" form (name, image)
- [ ] Server Action: `createServer()`
    - Create Server record
    - Create Profile if not exists
    - Create default "general" channel
    - Create Member record (as ADMIN)
    - Generate unique invite code
- [ ] Redirect to `/servers/[serverId]`
- [ ] Test: Can create server and see it

### Day 4: Layout & Routing

- [ ] Create server layout: `/servers/[serverId]/layout.tsx`
    - Left sidebar: Server list (icons)
    - Middle sidebar: Channel list
    - Main area: {children}
- [ ] Create channel page: `/servers/[serverId]/channels/[channelId]/page.tsx`
- [ ] Fetch server data (Server Actions)
- [ ] Fetch channels data
- [ ] Display in sidebar
- [ ] Test: Navigation works

### Day 5: Basic Messaging UI

- [ ] Build chat interface:
    - Message list (scroll to bottom)
    - Input box (textarea)
    - Send button
- [ ] Fetch messages (Server Action: `getMessages(channelId)`)
- [ ] Display messages (author, timestamp, content)
- [ ] Test: Can see existing messages

### Day 6: Real-Time Setup (Socket.io)

- [ ] Create `/pages/api/socket/io.ts` (Socket.io server)
- [ ] Create Socket.io provider component
- [ ] Wrap app in provider
- [ ] Test: Socket connection in browser DevTools

### Day 7: Real-Time Messaging

- [ ] Server Action: `sendMessage(content, channelId)`
    - Save to DB
    - Emit socket event: `message:new`
- [ ] Client: Listen for `message:new`
    - Append to message list (optimistic UI)
- [ ] Test: Open 2 browser tabs, send message, see in both

## Week 2: Polish & Invite System (Days 8-14)

### Day 8: Invite System Backend

- [ ] Server Action: `generateInviteCode(serverId)`
    - Update Server.inviteCode
    - Return new code
- [ ] Create `/invite/[inviteCode]/page.tsx`
- [ ] Server Action: `joinServerByInvite(inviteCode)`
    - Find server by code
    - Create Member record
    - Redirect to server
- [ ] Test: Generate code, join as second user

### Day 9: Channel Management

- [ ] Modal: Create Channel
- [ ] Server Action: `createChannel(name, serverId)`
- [ ] Server Action: `deleteChannel(channelId)`
    - Cannot delete if `isDefault: true`
- [ ] Test: Create/delete channels

### Day 10: Message Actions

- [ ] Edit message UI (pencil icon)
- [ ] Server Action: `editMessage(messageId, newContent)`
- [ ] Delete message UI (trash icon)
- [ ] Server Action: `deleteMessage(messageId)` (soft delete)
- [ ] Test: Edit/delete own messages

### Day 11: UI Polish

- [ ] Add loading states
- [ ] Add error handling
- [ ] Improve mobile responsive
- [ ] Add empty states ("No messages yet")
- [ ] Test on phone

### Day 12: Member Management

- [ ] Display member list sidebar
- [ ] Show online status (Socket.io presence)
- [ ] Kick member (Admin only)
- [ ] Test: See who's online

### Day 13: File Upload (UploadThing)

- [ ] Set up UploadThing account
- [ ] Create upload endpoint
- [ ] Add image upload to message input
- [ ] Display images in messages
- [ ] Test: Upload and see image

### Day 14: Testing & Deployment

- [ ] Test all flows end-to-end
- [ ] Fix critical bugs
- [ ] Deploy to Vercel
- [ ] Test on production
- [ ] Invite a friend to test

## Week 3: Nice-to-Haves (ONLY if Week 1-2 done)

- [ ] Markdown support
- [ ] Code syntax highlighting
- [ ] Member roles UI
- [ ] Server settings page

```

---

#### Step 3: Create Architecture Diagram (30 mins)

Draw this (use Excalidraw or paper):
```

┌─────────────────────────────────────────────┐
│ USER BROWSER │
│ ┌──────────────────────────────────────┐ │
│ │ Next.js App (App Router) │ │
│ │ ┌────────────┐ ┌─────────────┐ │ │
│ │ │ Components │ │ Server │ │ │
│ │ │ (Client) │←→│ Actions │ │ │
│ │ └────────────┘ └─────────────┘ │ │
│ │ ↓ ↓ │ │
│ │ ┌────────────┐ ┌─────────────┐ │ │
│ │ │ Socket.io │ │ Prisma │ │ │
│ │ │ Client │ │ Client │ │ │
│ │ └────────────┘ └─────────────┘ │ │
│ └──────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
↓ ↓
┌─────────────────┐ ┌───────────────┐
│ Socket.io │ │ PostgreSQL │
│ Server │ │ (Railway) │
│ (Next.js API) │ │ │
└─────────────────┘ └───────────────┘
↓
[Broadcast to all clients]
