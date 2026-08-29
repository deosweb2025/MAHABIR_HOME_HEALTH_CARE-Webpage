import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import doc1 from '../assets/images/confident-female-doctor-with-reports-clipboard-standing-against-male-patient-hospital.jpg';
import ped1 from '../assets/images/portrait-female-pediatrician-work.jpg';
import elder1 from '../assets/images/realistic-scene-with-elderly-care-senior-people.jpg';
import banner from '../assets/images/banner for mahabir home health care services.jpeg';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';

const galleryImages = [
  banner,
  elder1,
  doc1,
  ped1,
  pic1,
  pic2
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase mb-3 text-sm">Gallery</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            A Glimpse Into Our Work
          </h3>
          <p className="text-lg text-slate-600">
            See how we deliver care, compassion, and professional assistance every single day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(src)}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              } ${index === 3 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <img 
                src={src} 
                alt={`Gallery Image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium tracking-wide">View Image</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 sm:p-8 cursor-pointer"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-slate-800/50 hover:bg-slate-800 p-2 rounded-full transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
