import React from 'react';
import { RoadmapSection } from '../types';

interface SectionDetailsProps {
  section: RoadmapSection | null;
  completedTasks: Set<string>;
  onTaskToggle: (taskId: string) => void;
}

export const SectionDetails: React.FC<SectionDetailsProps> = ({
  section,
  completedTasks,
  onTaskToggle,
}) => {
  console.log("SectionDetails - Section:", section?.id);
  console.log("SectionDetails - CompletedTasks:", Array.from(completedTasks));

  if (!section) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
        <div className="text-center">
          <p>Select a section</p>
          <p className="text-sm mt-2">Click on any node in the diagram to view its details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-50">
        {section.emoji && <span className="mr-2">{section.emoji}</span>}
        {section.title}
      </h2>
      
      <div className="text-gray-700 dark:text-gray-300 mb-8">
        {section.description}
      </div>

      <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-gray-100">Tasks</h3>
      
      <div className="space-y-4">
        {section.tasks.map((task, index) => {
          const taskId = `${section.id}-task-${task.id}`;
          const isCompleted = completedTasks.has(taskId);
          
          console.log(`Task ${index} - ID: ${taskId}, Completed: ${isCompleted}`);
          
          return (
            <div 
              key={taskId}
              className="task-item p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all"
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id={taskId}
                  checked={isCompleted}
                  onChange={() => onTaskToggle(taskId)}
                  className="mt-1 h-4 w-4"
                />
                <div className="flex-1">
                  <label 
                    htmlFor={taskId}
                    className={`block font-medium cursor-pointer ${
                      isCompleted ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {task.title || task.description}
                  </label>
                  
                  {task.resources && task.resources.length > 0 && (
                    <div className={`mt-2 space-y-1 text-sm ${isCompleted ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-300'}`}>
                      <p className="font-medium">Resources:</p>
                      {task.resources.map((resource, idx) => (
                        <a
                          key={idx}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resource-link block hover:underline"
                        >
                          {resource.title || resource.url}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 
