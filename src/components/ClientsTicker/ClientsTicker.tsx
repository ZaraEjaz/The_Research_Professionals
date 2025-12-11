import { useState } from 'react';
import { motion } from 'framer-motion';
import ClientLogo from './ClientLogo';

const ClientsTicker = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Ensure these file names match exactly what is in public/clients/
  const clients = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Partner Organization ${i + 1}`,
    src: `/clients/client_${i + 1}.webp`, 
  }));

  // Duplicate the list to create a seamless infinite loop without gaps
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <motion.section
      // OPTIMIZATION: Only animate opacity when scrolled into view
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }} 
      transition={{ duration: 0.8 }}
      className="bg-white py-12 border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
            Trusted By Many
            </span>
          <h2 className="text-4xl mt-5 md:text-5xl font-bold text-gray-900 mb-4">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clients in advancing medical research and education.
          </p>
        </div>

        {/* Marquee Container */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Fade Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right Fade Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Sliding Track */}
          <motion.div
            className="flex w-max"
            // The animation moves the track to the left indefinitely
            animate={{ x: isHovered ? undefined : ["0%", "-33.33%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Adjust speed (higher number = slower)
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <ClientLogo
                key={`${client.id}-${index}`} // Unique key for duplicates
                src={client.src}
                alt={client.name}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ClientsTicker;