import React from 'react';

interface BilingualTextProps {
  indonesian: string;
  english: string;
  indonesianClassName?: string;
  englishClassName?: string;
}

const BilingualText: React.FC<BilingualTextProps> = ({ 
  indonesian, 
  english, 
  indonesianClassName = "text-xl font-bold",
  englishClassName = "text-sm italic text-slate-400"
}) => {
  return (
    <div>
      <p className={indonesianClassName}>{indonesian}</p>
      <p className={englishClassName}>{english}</p>
    </div>
  );
};

export default BilingualText;
