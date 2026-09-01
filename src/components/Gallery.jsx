import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Image as ImageIcon, Film, Grid } from 'lucide-react';

// Images
import ped1 from '../assets/images/portrait-female-pediatrician-work.jpg';
import banner from '../assets/images/banner for mahabir home health care services.jpeg';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import pic4 from '../assets/images/pic4.jpeg';

// Images mistakenly placed in videos folder
import pic5 from '../assets/videos/pic5.jpeg';
import pic10 from '../assets/videos/pic10.jpeg';

// Videos
import video4 from '../assets/videos/videos4.mp4';
import video5 from '../assets/videos/videos5.mp4';

const galleryData = [
  // Images
  { type: 'image', src: banner, title: "Mahabir Home Health Care" },
  { type: 'image', src: ped1, title: "Child & Baby Care" },
  { type: 'image', src: pic1, title: "Physiotherapy & Rehab" },
  { type: 'image', src: pic2, title: "24/7 Dedicated Support" },
  { type: 'image', src: pic3, title: "Expert Assistance" },
  { type: 'image', src: pic4, title: "Compassionate Healing" },
  { type: 'image', src: pic5, title: "Specialized Care" },
  { type: 'image', src: pic10, title: "Dedicated Staff" },
  // Videos
  { type: 'video', src: video4, title: "Home Health Support" },
  { type: 'video', src: video5, title: "Our Care Process" },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'image', 'video'
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter and sort items based on current tab
  const filteredData = useMemo(() => {
    let items = [];
    if (filter === 'all') {
      // In "All" tab: show images first, then videos
      const images = galleryData.filter(item => item.type === 'image');
      const videos = galleryData.filter(item => item.type === 'video');
      items = [...images, ...videos];
    } else {
      items = galleryData.filter(item => item.type === filter);
    }
    return items;
  }, [filter]);

  const displayedData = filteredData.slice(0, visibleCount);
  const hasMore = visibleCount < filteredData.length;

  const handleToggleShow = () => {
    if (hasMore) {
      // Load more (adds exactly 1 row of 3)
      setVisibleCount(prev => prev + 3);
    } else {
      // Show less (reset to initial state depending on tab)
      setVisibleCount(filter === 'video' ? 3 : 6);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setVisibleCount(newFilter === 'video' ? 3 : 6); // 3 items form a perfect featured block
  };

  return (
    <section id="gallery" className="py-24 bg-brand-ivory dark:bg-slate-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-accent dark:text-teal-400 font-semibold tracking-wider uppercase mb-3 text-sm">Gallery</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-4">
            A Glimpse Into Our Work
          </h3>
          <p className="text-lg text-secondary dark:text-slate-300">
            See how we deliver care, compassion, and professional assistance every single day.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleFilterChange('all')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Grid size={18} />
            All
          </button>
          <button
            onClick={() => handleFilterChange('image')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              filter === 'image' 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <ImageIcon size={18} />
            Images
          </button>
          <button
            onClick={() => handleFilterChange('video')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              filter === 'video' 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Film size={18} />
            Videos
          </button>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[250px] transition-all duration-500">
          <AnimatePresence mode="popLayout">
            {displayedData.map((item, index) => (
              <motion.div
                layout
                key={item.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className={`group relative rounded-2xl p-[3px] cursor-pointer bg-white shadow-md transition-shadow duration-300 hover:shadow-xl ${
                  index === 0 && displayedData.length >= 3 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                {/* Hover Gradient Border Layer */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-xl overflow-hidden z-10 bg-slate-900">
                  {item.type === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative w-full h-full bg-slate-900">
                      <video 
                        src={item.src}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary/90 transition-colors duration-500">
                          <Play className="text-white ml-1" size={24} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Subtle Darkening Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
                  
                  {/* Modern Capsule Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                    <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 flex flex-col items-start border border-white/10 shadow-lg">
                      <span className="text-white font-semibold text-sm md:text-base font-sans drop-shadow-md">
                        {item.title}
                      </span>
                      <span className="text-teal-300 text-xs md:text-sm capitalize font-medium font-sans mt-1">
                        View {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More / Show Less Button */}
        {filteredData.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={handleToggleShow}
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold transition-colors duration-300 shadow-sm"
            >
              {hasMore ? 'Load More' : 'Show Less'}
            </button>
          </div>
        )}
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
              
              {selectedItem.type === 'image' ? (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.title} 
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <video 
                  src={selectedItem.src} 
                  controls
                  autoPlay
                  className="max-w-full max-h-[75vh] w-full bg-black rounded-lg shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
