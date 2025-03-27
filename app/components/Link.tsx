"use client";

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

interface LinkProps {
  title: string;
  url: string;
  description?: string;
}

const Link: React.FC<LinkProps> = ({ title, url, description }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-container block w-full"
    >
      <div className="link-card">
        <div>
          <h3 className="font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-blue-100 mt-1">{description}</p>
          )}
        </div>
        <FiChevronRight className="w-5 h-5" />
      </div>
    </a>
  );
};

export default Link; 