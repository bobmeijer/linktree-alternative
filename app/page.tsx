"use client";

import React from 'react';
import Profile from './components/Profile';
import LinkContainer from './components/LinkContainer';
import ContactButton from './components/ContactButton';
import ThemeToggle from './components/ThemeToggle.jsx';

export default function Home() {
  return (
    <div className="profile-container relative">
      <ThemeToggle />
      <Profile
        name="Bob Meijer"
        bio="I help Google Ads specialists to excel in their careers"
        image="/bobmeijerv1.webp"
        socials={{
          linkedin: "https://linkedin.com/in/example",
          email: "contact@example.com"
        }}
      />
      <LinkContainer />
      <ContactButton />
    </div>
  );
} 