import { useState } from 'react';

interface ClientLogoProps {
  src: string;
  alt: string;
}

const ClientLogo = ({ src, alt }: ClientLogoProps) => {
  return (
    <div className="flex items-center justify-center h-32 md:h-52 px-8 md:px-14 flex-shrink-0">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        // UPDATED IMAGE SIZE: 
        // Mobile: h-24 (96px)
        // Desktop: md:h-40 (160px) - This makes them much larger
        className="h-24 md:h-40 w-auto object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          console.warn(`Missing logo: ${src}`);
        }}
      />
    </div>
  );
};

export default ClientLogo;