# ⌨️ Keyboard Typing Game

A simple browser-based typing game built with TypeScript/React where users type random words generated from an API. The goal is to improve typing speed and accuracy.

---

## Features

- Random word generation using API
- Real-time word switching on correct input
- Simple and clean UI
- Keyboard-based interaction
- Lightweight and fast

---

## How It Works

1. A random word is displayed on the screen.
2. The user types the word using the keyboard.
3. When the correct word is typed:
   - The game automatically moves to the next word.
   - Input is cleared.
4. The process repeats continuously.

---

## Tech Stack

- React
- TypeScript (optional)
- Fetch API
- CSS for styling

---

## Installation

```bash
git clone https://github.com/your-username/keyboard-game.git
cd keyboard-game
npm install
npm run dev
```

---

## API Used

This project uses a random word API:

```
https://api.api-ninjas.com/v2/randomword
```

You will need to create an account on that site to get your API key and add your API key in an .env file:

```bash
VITE_API_KEY=your_api_key_here
```
