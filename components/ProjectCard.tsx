import React from 'react';
import { ZapIcon } from './icons/ZapIcon';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, demoUrl }) => (
  <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl dark:shadow-black/25 dark:hover:shadow-blue-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 border-t-4 border-blue-500 flex flex-col">
    <div className="flex-grow">
      <ZapIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/70 text-blue-800 dark:text-blue-200">
            {t}
          </span>
        ))}
      </div>
    </div>
    {demoUrl && (
      <div className="mt-6">
        <a 
          href={demoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97]"
        >
          View Demo
        </a>
      </div>
    )}
  </div>
);
