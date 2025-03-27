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
  description?: string;
}

const LinkContainer: React.FC = () => {
  const links: LinkItem[] = [
    {
      title: 'Join The PPC Hub',
      url: 'https://www.ppcmastery.com/hub',
      icon: <FiUsers />,
      description: 'Level up your Google Ads skills and join a global community of world-class Google Ads Specialists who all learn and grow together.'
    },
    {
      title: 'Subscribe to The PPC Edge',
      url: 'https://www.ppcmastery.com/blog',
      icon: <FiMail />,
      description: 'Join 20k+ Google Ads specialists and receive advanced Google Ads strategies and tactics (for free) in your mailbox every Monday & Friday.'
    },
    {
      title: 'Audit my Google Ads account',
      url: 'https://bobmeijer.nl/en/google-ads-audit/',
      icon: <FiFileText />,
      description: 'Are you curious whether you\'re getting the most out of your campaigns? I\'ll map it out for you with an in-depth Google Ads audit – starting at € 2500.'
    },
    {
      title: 'Run Google Ads for me',
      url: 'https://bobmeijer.nl/en/outsource-google-ads/',
      icon: <FiMonitor />,
      description: 'Your Google Ads campaigns perform better with me behind the wheel. I help ambitious companies like yours get the most out of Google Ads.'
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            title={link.title}
            url={link.url}
            icon={link.icon}
            description={link.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkContainer; 