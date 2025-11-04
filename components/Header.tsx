import React from 'react';
import type { HijriDate } from '../types';
import { useClock } from '../hooks/useClock';
import { SmamdaLogo, CalendarIcon, CloudIcon } from './Icons';

interface HeaderProps {
  hijriDate?: HijriDate;
  temperature: number;
}

const Header: React.FC<HeaderProps> = ({ hijriDate, temperature }) => {
  const now = useClock();

  const gregorianDate = now.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const hijriDateString = hijriDate
    ? `${hijriDate.day} ${hijriDate.month.en} ${hijriDate.year} H`
    : 'Memuat...';

  return (
    <header className="bg-slate-800/50 shadow-md p-3 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-4">
        <SmamdaLogo className="h-12 w-auto" />
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white">SMA Muhammadiyah 2 Sidoarjo</h1>
          <p className="text-sm sm:text-base text-cyan-300 italic">Holistic Education</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6 text-right flex-wrap">
        <div className="flex flex-col items-end">
          <p className="text-2xl sm:text-4xl font-mono text-cyan-300">{formattedTime}</p>
           <p className="text-xs sm:text-sm text-slate-300">{gregorianDate}</p>
        </div>
        
        <div className="hidden sm:flex items-center gap-2 text-slate-300">
          <CalendarIcon className="w-6 h-6" />
          <span>{hijriDateString}</span>
        </div>
        
        <div className="flex items-center gap-2 text-slate-300">
           <CloudIcon className="w-7 h-7" />
           <span className="text-xl font-semibold">{temperature}°C</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
