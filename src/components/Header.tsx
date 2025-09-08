import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 py-6 px-4 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-0 text-gray-900 dark:text-white">Full-Stack Developer Roadmap</h1>
        <p className="text-gray-600 dark:text-gray-400">An interactive visualization of the journey to becoming a full-stack developer</p>
      </div>
    </header>
  );
}; 
