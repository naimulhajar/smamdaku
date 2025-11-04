// Fix: Import React types to make the 'React' namespace available for type annotations.
import type * as React from 'react';

export interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Sunrise: string;
}

export interface HijriDate {
  date: string;
  day: string;
  month: {
    number: number;
    en: string;
    ar: string;
  };
  year: string;
}

export type SlideAnimation = 'fade' | 'slide-left' | 'slide-up' | 'zoom';

export interface SlideItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

export interface SocialLink {
  name: string;
  username: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
