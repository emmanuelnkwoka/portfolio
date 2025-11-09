
import React from 'react';

interface ArticleLinkProps {
  title: string;
  date: string;
}

export const ArticleLink: React.FC<ArticleLinkProps> = ({ title, date }) => (
  <a 
    href="#" // Replace with actual article path
    className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors duration-300"
  >
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-500 flex-shrink-0 ml-4 mt-1">{date}</p>
    </div>
  </a>
);
