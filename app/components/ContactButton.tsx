"use client";

import React from 'react';
import { FiMail } from 'react-icons/fi';

const ContactButton: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <a
        href="mailto:bob@ppcmastery.com"
        className="w-fit flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        <FiMail className="w-5 h-5" />
        <span>Contact me</span>
      </a>
    </div>
  );
};

export default ContactButton; 