<<<<<<< HEAD
# vibe-coded-app
=======
# Full-Stack Developer Roadmap 2025

An interactive visualization of the journey to becoming a full-stack developer in 2025, built with React, TypeScript, Tailwind CSS, and React Flow.

## Features

- Interactive flowchart diagram showing the full-stack development path
- Animated node-centering when clicking on roadmap sections
- Progress tracking with localStorage persistence
- Detailed information for each step in the roadmap
- Resource links for learning each technology or concept
- Task completion tracking with visual progress indicators
- Dark/light mode theme toggle
- Responsive UI for desktop and mobile viewing

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite (for bundling)
- React Flow (for interactive flowchart)
- LocalStorage API (for data persistence)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn (v1.22 or higher) or npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Start the development server:

```bash
yarn dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:1234`

## Building for Production

To build the application for production, run:

```bash
yarn build
# or
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── index.tsx        # Main entry point
│   ├── App.tsx          # Main application component
│   ├── roadmap-data.ts  # Data for the roadmap sections and tasks
│   ├── types.ts         # TypeScript type definitions
│   ├── styles.css       # Global styles and Tailwind imports
│   ├── components/      # UI components
│   │   ├── Header.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── RoadmapFlow.tsx
│   │   ├── SectionDetails.tsx
│   │   └── ThemeToggle.tsx
│   └── contexts/
│       └── ThemeContext.tsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.js
└── README.md
```

## License

MIT 
>>>>>>> 8d4acaa (Initial commit: Fullstack roadmap project)
