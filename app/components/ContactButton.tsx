import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';

const ContactButton: React.FC = () => {
  return (
    <a
      href="mailto:contact@example.com"
      className="link-card mt-4 bg-opacity-90 hover:bg-opacity-100"
    >
      <div className="flex items-center">
        <FiMessageSquare className="mr-3" />
        <span>Send me a message</span>
      </div>
      <FiMessageSquare className="opacity-0" />
    </a>
  );
};

export default ContactButton; 