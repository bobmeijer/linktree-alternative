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
    <div className="card-container bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col w-full">
      <div className="p-6 flex-grow">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        {description && (
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{description}</p>
        )}
      </div>
      <div className="px-6 pb-6">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-button w-full py-3 px-4 flex items-center justify-center"
        >
          <span className="font-medium">Learn more</span>
          <FiChevronRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Link; 