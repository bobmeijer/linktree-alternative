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
    <div className="text-center mb-8">
      <div className="profile-image mx-auto">
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
      <div className="flex items-center justify-center gap-2 mb-2">
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
      <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md mx-auto">{bio}</p>
      
      {credentials.length > 0 && (
        <div className="credentials-list max-w-md mx-auto mb-6">
          {credentials.map((credential, index) => (
            <div key={index} className="flex items-center mb-2 text-left">
              <span className="text-green-500 mr-2 flex-shrink-0">
                <BsCheckCircleFill size={14} />
              </span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{credential}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile; 