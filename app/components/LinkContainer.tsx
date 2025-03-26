import React from 'react';
import Link from './Link';
import { 
  FiBookOpen, 
  FiUsers, 
  FiMail, 
  FiFileText, 
  FiHeadphones, 
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
      url: 'https://example.com/courses',
      icon: <FiBookOpen />,
    },
    {
      title: 'Google Ads community',
      url: 'https://example.com/community',
      icon: <FiUsers />,
    },
    {
      title: 'Google Ads newsletter',
      url: 'https://example.com/newsletter',
      icon: <FiMail />,
    },
    {
      title: 'Google Ads coaching',
      url: 'https://example.com/coaching',
      icon: <FiHeadphones />,
    },
    {
      title: 'Google Ads audit',
      url: 'https://example.com/audit',
      icon: <FiFileText />,
    },
    {
      title: 'Outsource Google Ads',
      url: 'https://example.com/outsource',
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