"use client";

import React from 'react';
import { FiMail } from 'react-icons/fi';

const ContactButton: React.FC = () => {
  return (
    <div className="w-full flex justify-center mt-12">
      <a
        href="mailto:info@bobmeijer.nl"
        className="w-fit flex items-center justify-center gap-2 px-8 py-4 bg-[#576AAB] text-white rounded-lg hover:bg-[#465599] transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        <FiMail className="w-5 h-5" />
        <span>Send me an email</span>
      </a>
    </div>
  );
};

export default ContactButton; 