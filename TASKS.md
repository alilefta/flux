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
