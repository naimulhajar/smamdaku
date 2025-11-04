import React from 'react';
import type { PrayerTimes as PrayerTimesType } from '../types';
import { SunIcon, MoonIcon } from './Icons';
import BilingualText from './BilingualText';

interface PrayerTimesProps {
  times: PrayerTimesType;
}

const prayerSchedule = [
  { id: 'Fajr', en: 'Fajr', id_text: 'Subuh' },
  { id: 'Sunrise', en: 'Sunrise', id_text: 'Terbit' },
  { id: 'Dhuhr', en: 'Dhuhr', id_text: 'Zuhur' },
  { id: 'Asr', en: 'Asr', id_text: 'Asar' },
  { id: 'Maghrib', en: 'Maghrib', id_text: 'Magrib' },
  { id: 'Isha', en: 'Isha', id_text: 'Isya' },
];

const PrayerTimes: React.FC<PrayerTimesProps> = ({ times }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-4">
        <BilingualText
          indonesian="Jadwal Salat"
          english="Prayer Times"
          indonesianClassName="text-3xl font-bold text-cyan-300"
          englishClassName="text-lg italic text-cyan-400"
        />
        <p className="text-sm text-slate-400">Sidoarjo & Sekitarnya / Sidoarjo & Surrounding Area</p>
      </div>
      <div className="flex-grow space-y-3">
        {prayerSchedule.map((prayer) => (
          <div
            key={prayer.id}
            className="flex items-center justify-between bg-slate-700/50 p-3 rounded-lg text-lg"
          >
            <div className="flex items-center gap-3">
               {prayer.id === 'Sunrise' || prayer.id === 'Fajr' ? <SunIcon className="w-6 h-6 text-yellow-300"/> : <MoonIcon className="w-6 h-6 text-slate-300" />}
              <div>
                <p className="font-semibold text-slate-100">{prayer.id_text}</p>
                <p className="text-xs italic text-slate-400">{prayer.en}</p>
              </div>
            </div>
            <p className="font-mono text-2xl text-cyan-300">
              {times[prayer.id as keyof PrayerTimesType]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerTimes;
