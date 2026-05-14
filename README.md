# Habit Tracker React App

A modern, user-friendly habit tracking application built with React, TypeScript, and Vite. Track your daily habits, monitor progress, and build lasting routines with an intuitive interface.

## Features

- ✨ **Create Habits** - Add new habits with ease using a simple form
- 📊 **Track Progress** - Monitor your habit completion across days
- 💾 **Local Storage** - Automatically saves your habits locally, no backend required
- ⚡ **Fast & Responsive** - Built with Vite for lightning-fast performance
- 🎨 **Clean UI** - Beautiful, minimalist interface using React components
- 🔄 **Context API** - Global state management for seamless data flow

## Tech Stack

- **Frontend Framework** - React 18+
- **Language** - TypeScript
- **Build Tool** - Vite
- **State Management** - Context API + Custom Hooks
- **Styling** - CSS
- **Code Quality** - ESLint

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/akramhakim-j/habit-tracker-reactapp.git
cd habit-tracker-reactapp
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Button.tsx      # Button component
│   ├── Header.tsx      # App header
│   ├── HabitForm.tsx   # Form for adding new habits
│   └── HabitList.tsx   # Display list of habits
├── context/            # Context API setup
│   ├── HabitProvider.tsx # Habit context provider
│   └── useHabit.ts     # Custom hook for habit context
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts # Hook for local storage management
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## How It Works

1. **HabitProvider** - Manages global habit state using React Context
2. **useLocalStorage Hook** - Persists habits to browser's local storage automatically
3. **Components** - Modular components for better maintainability and reusability
4. **useHabit Hook** - Custom hook for easy access to habit context in any component

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

This project is open source and available under the MIT License.
