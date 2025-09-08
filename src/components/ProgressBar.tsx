import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold dark:text-white text-black">Your Progress</h2>
        <span className="text-xl font-bold dark:text-white text-black">{progress}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-value"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}; 
