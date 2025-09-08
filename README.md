# Vibe-Coded App – Interactive Developer Roadmaps 2025

An interactive visualization of the journey to becoming a developer in 2025, built with React, TypeScript, Tailwind CSS, and React Flow.  
Includes complete roadmaps for **Full-Stack Development, AI/ML Engineering, Cybersecurity, and Blockchain**.

## Features

- Interactive flowchart diagrams for multiple career paths  
- Animated node-centering when clicking on roadmap sections  
- Task completion tracking with localStorage persistence  
- Progress bar showing overall roadmap progress  
- Resource links for learning each technology or concept  
- Dark/light theme toggle  
- Responsive UI for desktop and mobile viewing  

## Technologies Used

- React  
- TypeScript  
- Tailwind CSS  
- Vite (bundler)  
- React Flow (for flowchart visualization)  
- LocalStorage API (for saving task progress)  

## Installation

### Prerequisites

- Node.js (v14 or higher)  
- Yarn (v1.22 or higher) or npm  

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/itsmesaiii/vibe-coded-app.git
   cd vibe-coded-app
   ```

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

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the application for production, run:

```bash
yarn build
# or
npm run build
```

The built files will be available in the `dist` directory.

## Project Structure

```
├── src/
│   ├── index.tsx            # Main entry point
│   ├── App.tsx              # Main application component
│   ├── types.ts             # Shared TypeScript type definitions
│   ├── styles.css           # Global styles and Tailwind imports
│   ├── components/          # UI components
│   │   ├── Header.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── RoadmapFlow.tsx
│   │   ├── SectionDetails.tsx
│   │   └── ThemeToggle.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   └── roadmaps/            # Roadmap definitions
│       ├── index.ts
│       ├── fullstack.ts
│       ├── ai-ml.ts
│       ├── cybersecurity.ts
│       └── blockchain.ts
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.js
└── README.md
```

## License

MIT
