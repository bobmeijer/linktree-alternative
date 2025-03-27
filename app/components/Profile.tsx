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
  return (
    <div className="mb-8 w-full">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 w-full max-w-6xl mx-auto">
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
          <div className="flex items-center gap-2 mb-2">
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
          
          <p className="text-gray-600 dark:text-gray-300 text-lg">{bio}</p>
        </div>
      </div>
      
      {credentials.length > 0 && (
        <div className="w-full flex justify-center mb-8">
          <div className="credentials-list bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-500 mr-2 flex-shrink-0">
                    <BsCheckCircleFill size={14} />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="w-full flex justify-center mb-6">
        <h2 className="text-xl font-semibold text-center">How I can help</h2>
      </div>
    </div>
  );
};

export default Profile; 