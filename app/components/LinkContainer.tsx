"use client";

import React from 'react';
import Link from './Link';

interface LinkItem {
  title: string;
  url: string;
  description?: string;
}

const LinkContainer: React.FC = () => {
  const links: LinkItem[] = [
    {
      title: 'Join The PPC Hub',
      url: 'https://www.ppcmastery.com/hub',
      description: 'Level up your Google Ads skills and join a global community of world-class Google Ads Specialists who all learn and grow together.'
    },
    {
      title: 'Subscribe to The PPC Edge',
      url: 'https://www.ppcmastery.com/blog',
      description: 'Join 20k+ Google Ads specialists and receive advanced Google Ads strategies and tactics (for free) in your mailbox every Monday & Friday.'
    },
    {
      title: 'Audit my Google Ads account',
      url: 'https://bobmeijer.nl/en/google-ads-audit/',
      description: 'Are you curious whether you\'re getting the most out of your campaigns? I\'ll map it out for you with an in-depth Google Ads audit – starting at € 2500.'
    },
    {
      title: 'Run Google Ads for me',
      url: 'https://bobmeijer.nl/en/outsource-google-ads/',
      description: 'Your Google Ads campaigns perform better with me behind the wheel. I help ambitious companies like yours get the most out of Google Ads.'
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl">
        {links.map((link, index) => (
          <Link
            key={index}
            title={link.title}
            url={link.url}
            description={link.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkContainer; 