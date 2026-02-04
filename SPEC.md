# Flux - Technical Specification

## Overview

Real-time team collaboration platform (Discord-like) for dev teams.

## Tech Stack

- Frontend: Next.js 15, TypeScript, Tailwind, shadcn/ui
- Backend: Next.js Server Actions, Prisma, PostgreSQL
- Real-time: Socket.io (or Pusher)
- Auth: Clerk
- File Upload: UploadThing
- Deployment: Vercel + Railway (DB)

## User Flows (Critical Paths)

### 1. First-Time User

1. Land on `/` → See landing page
2. Click "Get Started" → Clerk auth modal
3. After auth → Redirect to `/setup`
4. Create first server → Redirect to `/servers/[serverId]`
5. See "general" channel created automatically
6. Can send first message

### 2. Invite Flow

1. User clicks "Invite People" in server
2. Copy invite link: `flux.app/invite/ABC123`
3. Friend opens link → Clerk auth (if not logged in)
4. Auto-joins server → Redirects to server

### 3. Messaging Flow

1. User selects channel from sidebar
2. Types message in input
3. Hits Enter → Optimistic UI (instant display)
4. Socket.io broadcasts to all online members
5. Message persists to DB

## Database Schema

[Already done ✅]

## Feature Scope

### MUST-HAVE (Week 1-2)

- [ ] Auth (Clerk)
- [ ] Create Server
- [ ] Create Channel (auto-create "general")
- [ ] Send Message (real-time)
- [ ] Invite System (generate code, join via link)
- [ ] Basic UI (sidebar, channel list, chat area)

### NICE-TO-HAVE (Week 3, if time)

- [ ] Edit/Delete Messages
- [ ] File Upload
- [ ] Markdown rendering
- [ ] Member list sidebar

### OUT OF SCOPE (Do NOT touch)

- Voice/Video
- Push notifications
- Advanced roles beyond Admin/Guest

## Success Criteria

Can invite a friend, create a channel, and chat in real-time.
