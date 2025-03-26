"use client";

import React from 'react';
import Image from 'next/image';
import { FiMail, FiLinkedin } from 'react-icons/fi';

interface ProfileProps {
  name: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    email?: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ 
  name,
  bio,
  image,
  socials
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
      <h1 className="text-2xl font-bold mt-4 mb-2">{name}</h1>
      <p className="text-gray-600 mb-6">{bio}</p>
      
      <div className="social-icons justify-center">
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-opacity-80 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
        )}
        {socials.email && (
          <a
            href={`mailto:${socials.email}`}
            className="text-primary hover:text-opacity-80 transition-colors"
            aria-label="Email"
          >
            <FiMail size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Profile; 