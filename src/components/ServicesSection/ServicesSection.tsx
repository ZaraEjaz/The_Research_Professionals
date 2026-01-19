import { motion } from 'framer-motion';
import { servicesData } from '../../data/servicesData';

// Placeholder images
const serviceImages = [
  "/images/g_image_2.webp",
  "/images/g_image_3.webp",
  "/images/g_image_4.webp",
  "/images/g_image_5.webp"
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white overflow-hidden">
      {/* UPDATED: Changed max-w-6xl to max-w-7xl to reduce empty space on sides.
        You can also use 'max-w-full' if you want it to stretch to the very edges.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            How We Help You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert guidance and comprehensive support tailored to every stage of your research journey.
          </p>
        </motion.div>

        {/* --- SERVICES STACK --- */}
        <div className="space-y-10 md:space-y-20">
          {servicesData.map((category, index) => {
            const isEven = index % 2 === 0;
            
            const mobileGradient = 'bg-gradient-to-b from-blue-50 via-white/60 to-white';
            const desktopGradient = isEven 
              ? 'md:bg-gradient-to-r md:from-blue-50 md:via-white/80 md:to-white' 
              : 'md:bg-gradient-to-l md:from-blue-50 md:via-white/80 md:to-white';

            const borderRadius = isEven
              ? 'rounded-t-[2.5rem] md:rounded-[3rem]'
              : 'rounded-t-[2.5rem] md:rounded-r-[3rem]';

            const overlapMargin = isEven
              ? '-mt-10 md:mt-0 md:-ml-12' 
              : '-mt-10 md:mt-0 md:-mr-12'; 

            const contentPadding = isEven
              ? 'pt-14 pb-6 px-6 md:py-10 md:pl-20 md:pr-4'
              : 'pt-14 pb-6 px-6 md:py-10 md:pr-20 md:pl-4';

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* 1. IMAGE SIDE */}
                <div className="w-full md:w-5/12 flex justify-center z-20">
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-white">
                       <img 
                         src={serviceImages[index % serviceImages.length]} 
                         alt={category.title}
                         className="w-full h-full object-cover"
                         loading="lazy"
                         decoding="async"
                       />
                    </div>
                  </div>
                </div>

                {/* 2. CONTENT CARD */}
                <div className={`w-full md:w-7/12 relative z-10 ${overlapMargin} ${mobileGradient} ${desktopGradient} ${borderRadius}`}>
                  <div className={`relative ${contentPadding} text-center ${!isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {category.title}
                    </h3>
                    
                    {/* UPDATED: Changed max-w-md to max-w-lg to let text fill the wider space better */}
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0 inline-block">
                      {category.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 mb-6 justify-center ${!isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {category.services.slice(0, 4).map((service) => (
                        <span 
                          key={service.id} 
                          className="text-sm md:text-base font-medium px-4 py-1.5 bg-white border border-gray-100 rounded-full text-gray-600 shadow-sm"
                        >
                          {service.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;