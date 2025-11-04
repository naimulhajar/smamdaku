import React from 'react';
import type { SlideItem, SocialLink } from './types';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, EmailIcon, WebsiteIcon } from './components/Icons';


// --- Slideshow Data ---
// This data is mocked. Replace with actual data fetched from your source, e.g., https://s.id/logosmamda
export const SLIDES_DATA: SlideItem[] = [
  {
    type: 'image',
    src: 'https://picsum.photos/1920/1080?random=1',
    alt: 'Kegiatan siswa di sekolah',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/1920/1080?random=2',
    alt: 'Auditorium Nyai Walidah',
  },
  {
    type: 'video',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    alt: 'Video profil sekolah',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/1920/1080?random=3',
    alt: 'Lingkungan sekolah yang nyaman',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/1920/1080?random=4',
    alt: 'Pertemuan di ruang briefing',
  },
];

// --- API and Location Constants ---
export const SIDOARJO_CITY = 'Sidoarjo';
export const SIDOARJO_COUNTRY = 'Indonesia';
// Kemenag (Indonesian Ministry of Religious Affairs) method
export const PRAYER_TIME_METHOD = 20; 


// --- Social Media Links ---
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    username: 'smamda',
    url: 'https://facebook.com/smamda',
    icon: FacebookIcon,
  },
  {
    name: 'YouTube',
    username: 'smamdasidoarjo',
    url: 'https://youtube.com/smamdasidoarjo',
    icon: YoutubeIcon,
  },
  {
    name: 'X (Twitter)',
    username: 'smamdasidoarjo',
    url: 'https://x.com/smamdasidoarjo',
    icon: TwitterIcon,
  },
  {
    name: 'Instagram',
    username: 'smamdasidoarjo',
    url: 'https://instagram.com/smamdasidoarjo',
    icon: InstagramIcon,
  },
  {
    name: 'Email',
    username: 'smamda@smamda.sch.id',
    url: 'mailto:smamda@smamda.sch.id',
    icon: EmailIcon,
  },
  {
    name: 'Website',
    username: 'smamda.sch.id',
    url: 'https://smamda.sch.id',
    icon: WebsiteIcon,
  },
];
