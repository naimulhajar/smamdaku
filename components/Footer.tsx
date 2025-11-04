import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800/50 p-4 mt-4 text-center text-slate-300 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          <p className="font-bold text-base text-white">SMA Muhammadiyah 2 Sidoarjo</p>
          <p>Jalan Mojopahit 666 B, Sidoarjo, 61215, Indonesia</p>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
              title={social.name}
            >
              <social.icon className="w-5 h-5" />
              <span className="text-sm">{social.username}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
