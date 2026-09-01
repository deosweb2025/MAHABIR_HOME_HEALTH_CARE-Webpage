import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse } from 'lucide-react';

import hero1 from '../assets/images/pic1.png';
import hero2 from '../assets/images/pic2.png';
import hero3 from '../assets/images/pic3.png';

const heroImages = [hero1, hero2, hero3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[90vh] w-full overflow-hidden bg-slate-900 mt-[72px] sm:mt-[80px] lg:mt-[96px]">
      {/* Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentImageIndex}
          src={heroImages[currentImageIndex]}
          alt="Home Health Care"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/50 to-slate-900/10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 min-h-[85vh] md:min-h-[90vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-24 pb-12">
        
        <div className="flex-1 flex flex-col justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-4 md:mb-6 text-teal-300 text-xs md:text-sm font-medium">
              <HeartPulse size={16} />
              <span>Trusted care, brought home.</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-4 md:mb-6 tracking-wide drop-shadow-lg">
              Care That <br className="hidden sm:block" />
              <span className="text-accent drop-shadow-sm">
                Feels Close.
              </span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mb-6 md:mb-8 max-w-xl leading-relaxed font-medium drop-shadow">
              Nursing, physiotherapy, patient attendants and medical equipment - coordinated for your family at home.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3.5 md:px-8 md:py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg transition-all hover:shadow-[0_0_20px_rgba(13,148,136,0.4)] flex justify-center items-center gap-2"
              >
                Get a Free Consultation
              </a>
              <a
                href="#services"
                className="px-6 py-3.5 md:px-8 md:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-xs sm:text-sm md:text-base lg:text-lg backdrop-blur-sm transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] flex justify-center items-center"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
