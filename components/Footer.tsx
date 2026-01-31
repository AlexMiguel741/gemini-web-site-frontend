import React from 'react';
import { CIN_CODES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {/* CIN Codes */}
        <div className="mb-4">
          <div className="hidden md:flex justify-center space-x-2">
            {CIN_CODES.map((code, index) => (
              <React.Fragment key={code}>
                <span className="font-mono text-gray-800">{code}</span>
                {index < CIN_CODES.length - 1 && <span className="text-gray-500"> • </span>}
              </React.Fragment>
            ))}
          </div>
          <div className="md:hidden flex flex-col items-center space-y-1">
            {CIN_CODES.map((code) => (
              <span key={code} className="font-mono text-gray-800">{code}</span>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Laveno Lake House. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;