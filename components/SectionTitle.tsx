
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 border-b-2 border-blue-500 pb-2 inline-block">
    {children}
  </h2>
);
