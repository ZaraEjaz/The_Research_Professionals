import { useState } from 'react';

interface ClientLogoProps {
  src: string;
  alt: string;
}

const ClientLogo = ({ src, alt }: ClientLogoProps) => {
  return (
    <div className="flex items-center justify-center h-20 px-8 sm:px-12 flex-shrink-0">
      <img
        src={src}
        alt={alt}
        // PERFORMANCE: Browser handles lazy loading natively
        loading="lazy"
        // PERFORMANCE: Decodes image off the main thread to prevent UI stutter
        decoding="async"
        // STYLE: Grayscale by default, color on hover
        className="h-12 md:h-14 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-in-out transform hover:scale-110"
        onError={(e) => {
          // Fallback if image is missing so it doesn't break layout
          e.currentTarget.style.display = 'none';
          console.warn(`Missing logo: ${src}`);
        }}
      />
    </div>
  );
};

export default ClientLogo;