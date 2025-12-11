import { useEffect, useRef, useState } from "react";

// Helper function for smooth easing (makes the number slow down as it finishes)
const easeOutQuad = (t: number) => t * (2 - t);

const Stats = () => {
  const stats = [
    { value: 98, suffix: "%", label: "Satisfaction Rate" },
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 500, suffix: "+", label: "Researchers Guided" },
    { value: 300, suffix: "+", label: "Training Workshops" },
    { value: 100, suffix: "+", label: "Publications" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      // Increased threshold to 0.5 so it waits until 50% of the section is visible
      { threshold: 0.5 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              shouldAnimate={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, suffix, label, shouldAnimate }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    // The efficient animation loop
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Apply easing and set the number
      const easeProgress = easeOutQuad(progress);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value); // Ensure it lands exactly on the final number
      }
    };

    // Start the animation frame
    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [shouldAnimate, value]);

  return (
    <div className="text-center">
      <h3 
        className="text-4xl md:text-5xl font-bold text-[#001f54] mb-2"
        // 'tabular-nums' keeps the number width constant so it doesn't wiggle
        style={{ fontVariantNumeric: "tabular-nums" }} 
      >
        {count}
        {suffix}
      </h3>
      <p className="text-sm md:text-base text-gray-600">{label}</p>
    </div>
  );
};

export default Stats;