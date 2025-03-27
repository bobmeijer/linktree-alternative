"use client";

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

interface LinkProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
  description?: string;
}

const Link: React.FC<LinkProps> = ({ 
  title,
  url,
  icon,
  description
}: LinkProps) => {
  return (
    <div className="w-full max-w-2xl mb-6">
      {description ? (
        <div className="card-container bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 flex items-center justify-center">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <div className="flex items-center">
                  {icon && <span className="mr-3">{icon}</span>}
                  <span className="font-medium">{title}</span>
                </div>
                <FiChevronRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-card mb-3"
        >
          <div className="flex items-center">
            {icon && <span className="mr-3">{icon}</span>}
            <span>{title}</span>
          </div>
          <FiChevronRight className="text-white" />
        </a>
      )}
    </div>
  );
};

export default Link; 