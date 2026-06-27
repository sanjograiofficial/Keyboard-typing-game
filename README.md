# ⌨️ Keyboard Typing Game

A browser-based typing game built with React and TypeScript where players race against a timer by typing randomly generated words as quickly and accurately as possible.

---

## Features

- Random word generation with a local data file
- Real-time word switching on correct input
- Simple and clean UI
- Keyboard-based interaction
- Lightweight and fast
- 1-minute competitive mode
- Leaderboard

### Roadmap

- [ ] Multiple timer durations
- [ ] Free typing mode
- [ ] WPM calculation
- [ ] Accuracy tracking
- [ ] Improved UI/UX

---

## How It Works

### One minute game mode:

- The user gets one minute to score the highest score they can.

1. A random word is displayed on the screen.
2. The user types the word using the keyboard.
3. When the correct letters are typed in correct order:
   - The game automatically moves to the next word.
   - Score increases by 1.
   - Input is cleared.
4. When an incorrect letter is typed:
   - The mistake increases by 1.
   - Input is cleared and the user has to type the word from the start.
5. After 3 mistakes, the user gets one last chance. If the user makes a mistake again, it's `Game Over`.
6. In the "Game Over" screen, the leaderboard is shown of the top 10 scores.
7. Then the user can "try again" to get a higher score.
8. The process repeats continuously.

---

## Tech Stack

### Frontend

- React
- TypeScript
- Local word dataset for random word generation
- CSS and TailwindCSS for styling

### Backend

- Node.js
- Express
- TypeScript
- Postgres with Prisma
- Podman desktop
- Cors

---

## Prerequisites

- Node.js
- Podman Desktop
- PostgreSQL container support

---

## Installation

```bash
git clone https://github.com/sanjograiofficial/Keyboard-typing-game.git
cd Keyboard-typing-game
cd backend
npm install
```

### Environment Variables

For backend:

`Create a file named ".env"`

Inside ".env":

```bash
PORT=port_number
FRONTEND_PORT=your_react_port_number
POSTGRES_USER=username
POSTGRES_DB=database_name
POSTGRES_PASSWORD=password
POSTGRES_HOST=localhost
POSTGRES_PORT=port_number

DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
```

Open Terminal and run:

```bash
podman compose up
```

After that, run:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

And then, start the server:

```bash
npm run dev
```

Finally, the frontend:
`Create a file named ".env"`

Inside ".env":

```bash
VITE_BACKEND_PORT=server_port_number
```

```bash
cd ..
cd frontend
npm install
npm run dev
```

---
