import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-teal-400 font-semibold tracking-wider uppercase mb-3 text-sm">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              We Are Here For You
            </h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <MapPin className="text-teal-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Our Location</h4>
                  <p className="text-slate-300">Baidyapara, Ward No-13, Kolkata - 700150<br />(Landmark - Sonarpur Law College), South 24 Parganas, West Bengal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <Phone className="text-teal-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+919330391658" className="text-slate-300 hover:text-white transition-colors block">9330391658</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <Mail className="text-teal-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a href="mailto:gharamipalash706@gmail.com" className="text-slate-300 hover:text-white transition-colors">gharamipalash706@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <Clock className="text-teal-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Working Hours</h4>
                  <p className="text-slate-300">24 Hours Service Available</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden h-64 w-full shadow-lg border border-white/10">
              <iframe 
                src="https://maps.google.com/maps?q=Mahabir+Home+Health+Care,+Baidyapara,+Ward+No-13,+Kolkata,+700150&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white text-slate-800 p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send an Enquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="your phone number"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                >
                  <option>Nursing Care</option>
                  <option>Elder Care</option>
                  <option>Child Care</option>
                  <option>Physiotherapy</option>
                  <option>Other Enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
