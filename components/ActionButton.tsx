
import React from 'react';

interface ActionButtonProps {
  icon: React.ElementType;
  label: string;
  href: string;
  primary?: boolean;
  newWindow?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, label, href, primary = false, newWindow = false }) => (
  <a
    href={href}
    target={newWindow ? "_blank" : "_self"}
    rel={newWindow ? "noopener noreferrer" : undefined}
    className={`inline-flex items-center justify-center space-x-2 px-6 py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg
      ${primary
        ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
        : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
      }
    `}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </a>
);
