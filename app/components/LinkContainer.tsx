"use client";

import React from 'react';
import Link from './Link';
import { 
  FiBookOpen, 
  FiUsers, 
  FiMail, 
  FiFileText, 
  FiMonitor 
} from 'react-icons/fi';

interface LinkItem {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const LinkContainer: React.FC = () => {
  const links: LinkItem[] = [
    {
      title: 'Google Ads courses',
      url: 'https://www.ppcmastery.com/hub',
      icon: <FiBookOpen />,
    },
    {
      title: 'Google Ads community',
      url: 'https://example.com/community',
      icon: <FiUsers />,
    },
    {
      title: 'Google Ads newsletter',
      url: 'https://www.ppcmastery.com/blog',
      icon: <FiMail />,
    },
    {
      title: 'Google Ads audit',
      url: 'https://bobmeijer.nl/en/google-ads-audit/',
      icon: <FiFileText />,
    },
    {
      title: 'Outsource Google Ads',
      url: 'https://bobmeijer.nl/en/outsource-google-ads/',
      icon: <FiMonitor />,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {links.map((link, index) => (
        <Link
          key={index}
          title={link.title}
          url={link.url}
          icon={link.icon}
        />
      ))}
    </div>
  );
};

export default LinkContainer; 