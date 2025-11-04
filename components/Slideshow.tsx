import React, { useState, useEffect, useCallback } from 'react';
import type { SlideItem, SlideAnimation } from '../types';
import { FilmIcon, PhotoIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon, SparklesIcon } from './Icons';

interface SlideshowProps {
  slides: SlideItem[];
  interval?: number;
}

const animations: { name: SlideAnimation; label: string }[] = [
    { name: 'fade', label: 'Fade' },
    { name: 'slide-left', label: 'Slide Left' },
    { name: 'slide-up', label: 'Slide Up' },
    { name: 'zoom', label: 'Zoom' },
];

const Slideshow: React.FC<SlideshowProps> = ({ slides, interval = 8000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animation, setAnimation] = useState<SlideAnimation>('fade');

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPlaying, interval, goToNext]);

  const getAnimationClasses = (index: number) => {
      const isActive = index === currentIndex;
      let baseClasses = 'absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out';
      
      if (!isActive) {
          switch (animation) {
              case 'fade': return `${baseClasses} opacity-0`;
              case 'slide-left': return `${baseClasses} opacity-0 -translate-x-full`;
              case 'slide-up': return `${baseClasses} opacity-0 translate-y-full`;
              case 'zoom': return `${baseClasses} opacity-0 scale-150`;
              default: return `${baseClasses} opacity-0`;
          }
      }
      
      switch (animation) {
          case 'fade': return `${baseClasses} opacity-100`;
          case 'slide-left': return `${baseClasses} opacity-100 translate-x-0`;
          case 'slide-up': return `${baseClasses} opacity-100 translate-y-0`;
          case 'zoom': return `${baseClasses} opacity-100 scale-100`;
          default: return `${baseClasses} opacity-100`;
      }
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg shadow-2xl overflow-hidden">
      {slides.map((slide, index) => (
        <div key={slide.src + index} className={getAnimationClasses(index)}>
          {slide.type === 'image' ? (
            <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
          ) : (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      {/* Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-2 bg-black/50 p-2 rounded-md">
           {slides[currentIndex].type === 'image' ? <PhotoIcon className="w-5 h-5"/> : <FilmIcon className="w-5 h-5"/>}
          <span className="text-sm">{slides[currentIndex].alt}</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 bg-black/50 p-1 rounded-md">
                 <SparklesIcon className="w-5 h-5 text-cyan-300"/>
                 {animations.map(anim => (
                     <button key={anim.name} onClick={() => setAnimation(anim.name)} className={`px-2 py-1 text-xs rounded ${animation === anim.name ? 'bg-cyan-500' : 'bg-transparent hover:bg-white/20'}`}>
                         {anim.label}
                     </button>
                 ))}
            </div>
            <button onClick={goToPrevious} className="p-2 bg-black/50 rounded-full hover:bg-cyan-500 transition-colors">
                <ChevronLeftIcon className="w-6 h-6"/>
            </button>
            <button onClick={() => setIsPlaying(!isPlaying)} className="p-2 bg-black/50 rounded-full hover:bg-cyan-500 transition-colors">
                {isPlaying ? <PauseIcon className="w-6 h-6"/> : <PlayIcon className="w-6 h-6"/>}
            </button>
            <button onClick={goToNext} className="p-2 bg-black/50 rounded-full hover:bg-cyan-500 transition-colors">
                <ChevronRightIcon className="w-6 h-6"/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
