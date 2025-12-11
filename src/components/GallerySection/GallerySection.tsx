import OptimizedImage from '../OptimizedImage/OptimizedImage';

interface GallerySectionProps {
  title?: string;
}

const GallerySection = ({ title = "Medical Research & Training Gallery" }: GallerySectionProps) => {
  // 1. Automatically generate the list of your 18 local images
  const localImages = Array.from({ length: 18 }, (_, i) => `/images/g_image_${i + 1}.webp`);

  // 2. Duplicate array for infinite scroll effect
  const galleryStrip = [...localImages, ...localImages, ...localImages, ...localImages];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              Event Highlights
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {title}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A visual glimpse into our workshops, seminars, and the vibrant community of researchers we are building.
          </p>
        </div>

        {/* --- SCROLLING CONTENT --- */}
        <div className="space-y-8 md:space-y-12">
          
          {/* --- TOP ROW (Scrolls Left) --- */}
          <div className="relative rounded-2xl group">
            {/* Fade Overlay Effects */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
            </div>

            <div className="flex overflow-hidden">
              <div className="animate-scroll-left flex gap-4 md:gap-6 whitespace-nowrap hover:[animation-play-state:paused]">
                {galleryStrip.map((imagePath, index) => (
                  <GalleryItem key={`row1-${index}`} src={imagePath} />
                ))}
              </div>
            </div>
          </div>

          {/* --- BOTTOM ROW (Scrolls Right) --- */}
          <div className="relative rounded-2xl group">
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
            </div>

            <div className="flex overflow-hidden">
              <div className="animate-scroll-right flex gap-4 md:gap-6 whitespace-nowrap hover:[animation-play-state:paused]">
                {galleryStrip.map((imagePath, index) => (
                  <GalleryItem key={`row2-${index}`} src={imagePath} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Sub-component for clean, optimized image rendering
const GalleryItem = ({ src }: { src: string }) => (
  <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gray-100">
    <OptimizedImage
      src={src}
      alt="Gallery Image"
      className="w-full h-full object-cover"
    />
  </div>
);

export default GallerySection;