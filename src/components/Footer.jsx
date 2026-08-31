import { Phone, Mail, MapPin } from 'lucide-react';
import logoUrl from '../assets/logos/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-44 md:pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-3 w-fit">
              <img 
                src={logoUrl} 
                alt="Mahabir Home Health Care Logo" 
                className="h-10 sm:h-12 w-auto object-contain" 
              />
              <span className="text-lg md:text-xl lg:text-2xl font-bold tracking-tighter text-white max-w-[150px] sm:max-w-none">
                <span className="text-primary block sm:inline">MAHABIR</span>{' '}
                <span className="block sm:inline">HOME HEALTH CARE</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Providing compassionate, hospital-quality nursing and health care services directly to your doorstep. 24/7 round-the-clock professional support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg mb-2">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#home" className="hover:text-primary transition-colors w-fit">Home</a>
              <a href="#about" className="hover:text-primary transition-colors w-fit">About Us</a>
              <a href="#services" className="hover:text-primary transition-colors w-fit">Our Services</a>
              <a href="#why-choose-us" className="hover:text-primary transition-colors w-fit">Why Choose Us</a>
              <a href="#gallery" className="hover:text-primary transition-colors w-fit">Gallery</a>
              <a href="#testimonials" className="hover:text-primary transition-colors w-fit">Testimonials</a>
              <a href="#contact" className="hover:text-primary transition-colors w-fit">Contact Us</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg mb-2">Get In Touch</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Baidyapara, Ward No-13, Kolkata - 700150<br />(Landmark - Sonarpur Law College)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+919330391658" className="hover:text-white transition-colors">9330391658</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:gharamipalash706@gmail.com" className="hover:text-white transition-colors">gharamipalash706@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm flex flex-col items-center gap-2">
          <p>&copy; {new Date().getFullYear()} Mahabir Home Health Care</p>
          <p className="flex items-center gap-1 flex-wrap justify-center">
            Developed & Designed by 
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-primary transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
