import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import doc1 from '../assets/images/confident-female-doctor-with-reports-clipboard-standing-against-male-patient-hospital.jpg';
import ped1 from '../assets/images/portrait-female-pediatrician-work.jpg';
import elder1 from '../assets/images/realistic-scene-with-elderly-care-senior-people.jpg';
import banner from '../assets/images/banner for mahabir home health care services.jpeg';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';

const galleryData = [
  { src: banner, title: "Mahabir Home Health Care" },
  { src: elder1, title: "Elder Care Services" },
  { src: doc1, title: "Professional Nursing Care" },
  { src: ped1, title: "Child & Baby Care" },
  { src: pic1, title: "Physiotherapy & Rehab" },
  { src: pic2, title: "24/7 Dedicated Support" }
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

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
          {galleryData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              } ${index === 3 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <img 
                src={item.src} 
                alt={item.title} 
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
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-8 cursor-pointer"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-slate-800/50 hover:bg-slate-800 p-2 rounded-full transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedItem(null);
              }}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6 text-center drop-shadow-lg">
                {selectedItem.title}
              </h4>
              <img 
                src={selectedItem.src} 
                alt={selectedItem.title} 
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
