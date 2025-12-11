import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OptimizedImage = ({ src, alt, className = "" }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      // "lazy" means: Don't load me until the user scrolls near me
      loading="lazy"
      // "async" means: Decode me in the background so the scroll doesn't freeze
      decoding="async"
      // This helps the transition look smooth when the image loads
      className={`${className} transition-opacity duration-500 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default OptimizedImage;