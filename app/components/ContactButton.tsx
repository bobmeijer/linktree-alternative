"use client";

import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';

const ContactButton: React.FC = () => {
  return (
    <div className="w-full flex justify-center mt-8">
      <a
        href="mailto:info@bobmeijer.nl"
        className="link-button w-full max-w-[600px] py-3 px-6 flex items-center justify-center"
      >
        <FiMessageSquare className="mr-3" />
        <span className="font-medium">Send me a message</span>
      </a>
    </div>
  );
};

export default ContactButton; 