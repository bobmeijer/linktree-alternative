"use client";

import React from 'react';
import Profile from './components/Profile';
import LinkContainer from './components/LinkContainer';
import ContactButton from './components/ContactButton';
import ThemeToggle from './components/ThemeToggle.jsx';

export default function Home() {
  const credentials = [
    "10 Years of Experience with Google Ads",
    "2x Top 50 Most Influential PPC Expert (2024 & 2025)",
    "Managing €2M+/mo in Google Ads ad spend",
    "Trained 1000s of Google Ads Specialists"
  ];

  return (
    <div className="profile-container relative">
      <ThemeToggle />
      <Profile
        name="Bob Meijer"
        bio="I help Google Ads specialists to get the most out of Google Ads and excel in their careers"
        image="/bobmeijerv1.webp"
        socials={{
          linkedin: "https://www.linkedin.com/in/bmmeijer/",
          email: "info@bobmeijer.nl"
        }}
        credentials={credentials}
      />
      <LinkContainer />
      <ContactButton />
    </div>
  );
} 