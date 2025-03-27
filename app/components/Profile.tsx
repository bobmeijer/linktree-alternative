"use client";

import React from 'react';
import Image from 'next/image';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import { BsCheckCircleFill } from 'react-icons/bs';

interface ProfileProps {
  name: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    email?: string;
  };
  credentials?: string[];
}

const Profile: React.FC<ProfileProps> = ({ 
  name,
  bio,
  image,
  socials,
  credentials = []
}: ProfileProps) => {
  // Format the bio to break after "most" on desktop
  const formatBio = () => {
    const mostIndex = bio.indexOf("most");
    if (mostIndex === -1) return bio;
    
    const firstPart = bio.substring(0, mostIndex + 4); // Include "most"
    const secondPart = bio.substring(mostIndex + 4);
    
    return (
      <>
        <span className="md:after:content-[''] md:after:block">{firstPart}</span>
        <span>{secondPart}</span>
      </>
    );
  };
  
  return (
    <div className="mb-8 w-full">
      <div className="flex flex-col items-center mb-8">
        <div className="profile-section flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-6 w-full max-w-sm sm:max-w-md md:max-w-lg">
          <div className="profile-image mb-0">
            <Image
              src={image}
              alt={`${name}'s profile picture`}
              width={96}
              height={96}
              className="rounded-full object-cover"
              priority
              unoptimized
            />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <h1 className="text-2xl font-bold">{name}</h1>
              <div className="social-icons">
                {socials.linkedin && (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-opacity-80 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={20} />
                  </a>
                )}
                {socials.email && (
                  <a
                    href={`mailto:${socials.email}`}
                    className="text-primary hover:text-opacity-80 transition-colors"
                    aria-label="Email"
                  >
                    <FiMail size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              {formatBio()}
            </div>
          </div>
        </div>
      </div>
      
      {credentials.length > 0 && (
        <div className="w-full flex justify-center mb-8">
          <div className="credentials-list bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm w-full mx-auto md:w-auto md:min-w-fit" style={{ maxWidth: 'var(--profile-width, 32rem)' }}>
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center mb-3">
                <span className="text-green-500 mr-2 flex-shrink-0">
                  <BsCheckCircleFill size={14} />
                </span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{credential}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            function updateWidth() {
              const profileSection = document.querySelector('.profile-section');
              if (profileSection) {
                const width = profileSection.offsetWidth;
                document.documentElement.style.setProperty('--profile-width', width + 'px');
              }
            }
            
            // Update on load and resize
            updateWidth();
            window.addEventListener('resize', updateWidth);
          });
        `
      }} />
    </div>
  );
};

export default Profile; 