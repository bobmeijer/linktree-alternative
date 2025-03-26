import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

interface LinkProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ 
  title,
  url,
  icon
}: LinkProps) => {
  return (
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
  );
};

export default Link; 