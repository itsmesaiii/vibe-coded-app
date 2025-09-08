import React, { useState, useEffect } from "react";
import { RoadmapFlow } from "./components/RoadmapFlow";
import { Header } from "./components/Header";
import { ProgressBar } from "./components/ProgressBar";
import { SectionDetails } from "./components/SectionDetails";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import { allRoadmaps } from "./roadmaps";

// Dynamic storage key per roadmap
const getStorageKey = (roadmapId: string) =>
  `roadmap-completed-tasks-${roadmapId}`;

const storage = {
  saveCompletedTasks: (roadmapId: string, tasks: Set<string>) => {
    try {
      localStorage.setItem(
        getStorageKey(roadmapId),
        JSON.stringify(Array.from(tasks))
      );
      return true;
    } catch {
      return false;
    }
  },

  loadCompletedTasks: (roadmapId: string): Set<string> => {
    try {
      const saved = localStorage.getItem(getStorageKey(roadmapId));
      if (!saved) return new Set();
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? new Set(parsed) : new Set();
    } catch {
      return new Set();
    }
  },

  clearCompletedTasks: (roadmapId: string) => {
    try {
      localStorage.removeItem(getStorageKey(roadmapId));
      return true;
    } catch {
      return false;
    }
  },
};

const AppContent: React.FC = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState("fullstack");
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const currentRoadmap = allRoadmaps[selectedRoadmap];

  // Load saved tasks whenever roadmap changes
  useEffect(() => {
    const saved = storage.loadCompletedTasks(selectedRoadmap);
    setCompletedTasks(saved);
    setCurrentSection(null); // reset section view
  }, [selectedRoadmap]);

  // Save tasks whenever they change
  useEffect(() => {
    storage.saveCompletedTasks(selectedRoadmap, completedTasks);
  }, [completedTasks, selectedRoadmap]);

  // Total tasks for progress
  const totalTasks = currentRoadmap.sections.reduce(
    (total, section) => total + section.tasks.length,
    0
  );

  const progress =
    totalTasks > 0
      ? Math.round((completedTasks.size / totalTasks) * 100)
      : 0;

  const handleTaskToggle = (taskId: string) => {
    setCompletedTasks((prev) => {
      const newSet = new Set(prev);
      newSet.has(taskId) ? newSet.delete(taskId) : newSet.add(taskId);
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      <Header
        title={
          selectedRoadmap === "fullstack"
            ? "Full-Stack Developer Roadmap"
            : selectedRoadmap === "aiMl"
            ? "AI/ML Engineer Roadmap"
            : selectedRoadmap === "cyber"
            ? "Cybersecurity Specialist Roadmap"
            : "Blockchain Developer Roadmap"
        }
        description={currentRoadmap.overview}
      />

      <main className="max-w-[1600px] mx-auto py-8 px-4">
        {/* Progress bar + Reset */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1 mr-4">
            <ProgressBar progress={progress} />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (
                  window.confirm(
                    "Reset progress for this roadmap? This cannot be undone."
                  )
                ) {
                  setCompletedTasks(new Set());
                  storage.clearCompletedTasks(selectedRoadmap);
                }
              }}
              className="flex-shrink-0 px-3 py-1.5 text-xs font-medium bg-red-100 hover:bg-red-200 text-red-600 dark:bg-red-900/30 dark:hover:bg-red-900/50 dark:text-red-400 rounded transition-colors"
            >
              Reset Progress
            </button>
          </div>
        </div>

        {/* Roadmap selector */}
        <div className="mb-6">
          <label className="mr-2 font-semibold">Choose Roadmap:</label>
          <select
            value={selectedRoadmap}
            onChange={(e) => setSelectedRoadmap(e.target.value)}
            className="border rounded px-2 py-1 text-black"
          >
            <option value="fullstack">Fullstack Developer</option>
            <option value="aiMl">AI/ML Engineer</option>
            <option value="cyber">Cybersecurity Specialist</option>
            <option value="blockchain">Blockchain Developer</option>
          </select>
        </div>

        {/* Roadmap grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 mt-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <RoadmapFlow
              data={currentRoadmap}
              completedSections={new Set()}
              currentSection={currentSection}
              onSectionClick={setCurrentSection}
              completedTasks={completedTasks}
            />
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-800 transition-colors">
            <SectionDetails
              section={
                currentSection
                  ? currentRoadmap.sections.find(
                      (s) => s.id === currentSection
                    ) || null
                  : null
              }
              completedTasks={completedTasks}
              onTaskToggle={handleTaskToggle}
            />
          </div>
        </div>
      </main>

      <footer className="text-center py-6 mt-4 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800">
        <p>Created with ❤️ by Cursor Agent</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
