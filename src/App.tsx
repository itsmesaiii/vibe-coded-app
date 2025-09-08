import React, { useState, useEffect } from 'react';
import { RoadmapFlow } from './components/RoadmapFlow';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { SectionDetails } from './components/SectionDetails';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import { roadmapData } from './roadmap-data';

// Local storage key
const COMPLETED_TASKS_KEY = 'roadmap-completed-tasks';

// Helper functions for localStorage
const storage = {
  saveCompletedTasks: (tasks: Set<string>) => {
    try {
      const taskArray = Array.from(tasks);
      localStorage.setItem(COMPLETED_TASKS_KEY, JSON.stringify(taskArray));
      console.log('Tasks saved to localStorage:', taskArray);
      return true;
    } catch (error) {
      console.error('Failed to save tasks to localStorage:', error);
      return false;
    }
  },
  
  loadCompletedTasks: (): Set<string> => {
    try {
      const savedTasks = localStorage.getItem(COMPLETED_TASKS_KEY);
      if (!savedTasks) {
        return new Set();
      }
      
      const taskArray = JSON.parse(savedTasks);
      if (!Array.isArray(taskArray)) {
        return new Set();
      }
      
      console.log('Tasks loaded from localStorage:', taskArray);
      return new Set(taskArray);
    } catch (error) {
      console.error('Failed to load tasks from localStorage:', error);
      return new Set();
    }
  },
  
  clearCompletedTasks: () => {
    try {
      localStorage.removeItem(COMPLETED_TASKS_KEY);
      console.log('Tasks cleared from localStorage');
      return true;
    } catch (error) {
      console.error('Failed to clear tasks from localStorage:', error);
      return false;
    }
  }
};

const AppContent: React.FC = () => {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  // Load saved tasks from localStorage
  useEffect(() => {
    try {
      const savedTasks = storage.loadCompletedTasks();
      if (savedTasks.size > 0) {
        setCompletedTasks(savedTasks);
        console.log("Loaded tasks:", Array.from(savedTasks));
      }
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  }, []);

  // Save tasks to localStorage when they change
  useEffect(() => {
    if (document.readyState === 'complete' && completedTasks.size > 0) {
      console.log("Saving tasks:", Array.from(completedTasks));
      storage.saveCompletedTasks(completedTasks);
    }
  }, [completedTasks]);

  // Calculate progress
  const totalTasks = roadmapData.sections.reduce(
    (total, section) => total + section.tasks.length,
    0
  );
  
  const handleTaskToggle = (taskId: string) => {
    console.log("Toggling task:", taskId);
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      console.log("New completedTasks:", Array.from(newSet));
      return newSet;
    });
  };

  // Calculate progress based on completed tasks instead of sections
  const progress = Math.round((completedTasks.size / totalTasks) * 100);
  
  // Log the contents of completedTasks for debugging
  console.log('Completed tasks:', Array.from(completedTasks));

  const handleSectionClick = (sectionId: string) => {
    setCurrentSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      <Header />
      
      <main className="max-w-[1600px] mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1 mr-4">
            <ProgressBar progress={progress} />
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => {
                if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                  setCompletedTasks(new Set());
                  storage.clearCompletedTasks();
                }
              }}
              className="flex-shrink-0 px-3 py-1.5 text-xs font-medium bg-red-100 hover:bg-red-200 text-red-600 dark:bg-red-900/30 dark:hover:bg-red-900/50 dark:text-red-400 rounded transition-colors"
            >
              Reset Progress
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 mt-8">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <RoadmapFlow
              completedSections={new Set()}
              currentSection={currentSection}
              onSectionClick={handleSectionClick}
              completedTasks={completedTasks}
            />
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-800 transition-colors">
            <SectionDetails 
              section={currentSection ? roadmapData.sections.find(s => s.id === currentSection) || null : null}
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

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App; 
