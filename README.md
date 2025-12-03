# AI Habit Coach

A simple habit tracking web app with AI-generated feedback powered by OpenRouter.

## Features

- Track daily habits (Drink Water, Exercise, Study English, Read Book)
- View 7-day progress history with visual indicators
- Get personalized AI coaching feedback based on your habit data

## Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Database:** SQLite with Prisma ORM
- **AI:** OpenRouter API (Claude-compatible)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file and add your API key:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your OpenRouter API key:

```env
DATABASE_URL="file:./dev.db"
OPENROUTER_API_KEY=sk-or-v1-your-actual-key-here
MODEL_ID=google/gemma-3-27b-it:free
```

Get your API key from: https://openrouter.ai/keys

### 3. Set up the database

```bash
npx prisma migrate dev --name init
npm run db:seed
```

### 4. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Using Different AI Models

Change `MODEL_ID` in `.env.local` to use different models:

| Model | ID | Notes |
|-------|-----|-------|
| Gemma 3 27B (Free) | `google/gemma-3-27b-it:free` | Good for development |
| Claude Sonnet 4.5 | `anthropic/claude-sonnet-4.5` | Premium, best quality |
| Claude 3.5 Sonnet | `anthropic/claude-3.5-sonnet` | Premium alternative |

See all available models at: https://openrouter.ai/models

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── feedback/route.ts    # AI feedback endpoint
│   │   └── habits/              # Habit CRUD endpoints
│   ├── today/page.tsx           # Daily habit tracking
│   ├── history/page.tsx         # 7-day history + AI feedback
│   └── layout.tsx               # App layout
├── components/                   # React components
├── lib/
│   ├── prisma.ts                # Database client
│   └── openrouter.ts            # AI API wrapper
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── seed.ts                  # Demo data seeder
└── .env.local                   # Your environment variables
```

## Security Notes

**IMPORTANT: Never commit your API keys!**

- `.env.local` is in `.gitignore` and will not be committed
- Never share your `OPENROUTER_API_KEY` publicly
- All AI calls go through server-side API routes (never exposed to browser)
- If you accidentally commit a key, rotate it immediately at https://openrouter.ai/keys

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run db:migrate` | Run Prisma migrations |
| `npm run db:seed` | Seed database with demo data |
| `npm run db:studio` | Open Prisma Studio |
