"use client";

import React from 'react';
import Link from './Link';
import { 
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
      title: 'I want to join The PPC Hub',
      url: 'https://www.ppcmastery.com/hub',
      icon: <FiUsers />,
    },
    {
      title: 'I want to subscribe to The PPC Edge',
      url: 'https://www.ppcmastery.com/blog',
      icon: <FiMail />,
    },
    {
      title: 'I want you to audit my Google Ads account',
      url: 'https://bobmeijer.nl/en/google-ads-audit/',
      icon: <FiFileText />,
    },
    {
      title: 'I want you run Google Ads for me',
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