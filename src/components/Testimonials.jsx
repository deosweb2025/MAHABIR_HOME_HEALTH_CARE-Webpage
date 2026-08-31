import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, User, Heart, ShieldCheck } from 'lucide-react';

const defaultTestimonials = [];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({ name: '', text: '', rating: 5 });

  // Load testimonials from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('mahabir_testimonials_v2');
    if (saved) {
      setTestimonials(JSON.parse(saved));
    } else {
      setTestimonials(defaultTestimonials);
      localStorage.setItem('mahabir_testimonials_v2', JSON.stringify(defaultTestimonials));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    // Create new testimonial
    const newTestimonial = {
      id: Date.now(),
      name: formData.name,
      text: formData.text,
      rating: formData.rating,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };

    // Update state and local storage
    const updatedTestimonials = [newTestimonial, ...testimonials];
    setTestimonials(updatedTestimonials);
    localStorage.setItem('mahabir_testimonials_v2', JSON.stringify(updatedTestimonials));

    // Send to WhatsApp
    const whatsappNumber = "919330391658";
    const message = `Hello Mahabir Home Health Care! I just submitted a new testimonial on your website:%0A%0A*Name:* ${formData.name}%0A*Rating:* ${formData.rating} Stars%0A*Review:* ${formData.text}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({ name: '', text: '', rating: 5 });
  };

  return (
    <section id="testimonials" className="py-8 px-4 md:py-16 md:px-8 bg-teal-50/30 relative font-sans">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary font-semibold tracking-wider uppercase mb-3 text-sm">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            What Our Clients Say
          </h3>
          <p className="text-lg text-slate-600 font-sans">
            Share your experience with our care team. Your feedback helps us improve and helps others make the right choice.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Side: Core Commitments (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full justify-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Compassionate Care</h4>
              <p className="text-slate-600 leading-relaxed font-sans">
                We believe in treating every patient like our own family. Our approach is rooted in empathy, respect, and deep compassion for the well-being of your loved ones.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full justify-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="text-primary" size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Verified Professionals</h4>
              <p className="text-slate-600 leading-relaxed font-sans">
                Every member of our nursing and caregiving staff goes through rigorous background checks and continuous training to guarantee hospital-grade safety at home.
              </p>
            </div>
          </div>

          {/* Right Side: Submit Form (7 columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 h-full">
              <h4 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Write a Review</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={18} className="text-slate-400" />
                    </div>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-sans bg-slate-50 focus:bg-white"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({...formData, rating: star})}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star 
                          size={32} 
                          className={`${star <= formData.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 fill-transparent'} transition-colors`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Your Review</label>
                  <textarea 
                    required
                    rows="4"
                    value={formData.text}
                    onChange={(e) => setFormData({...formData, text: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none font-sans bg-slate-50 focus:bg-white"
                    placeholder="Tell us about your experience..."
                  ></textarea>
                </div>

                <div className="flex pt-4">
                  <button 
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 flex justify-center items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all font-sans"
                  >
                    <Send size={20} />
                    Submit & Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>

        {/* Testimonials Grid (Dynamically rendered below) */}
        {testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {testimonials.map((testimonial) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={testimonial.id}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all flex flex-col font-sans"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200 fill-slate-200'} 
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6 flex-grow leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800">{testimonial.name}</h5>
                      <p className="text-xs text-slate-500">{testimonial.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Testimonials;
