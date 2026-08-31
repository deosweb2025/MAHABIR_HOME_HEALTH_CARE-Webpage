import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import logoUrl from '../assets/logos/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3">
              <img 
                src={logoUrl} 
                alt="Mahabir Home Health Care Logo" 
                className={`h-10 sm:h-12 lg:h-14 w-auto object-contain transition-all duration-300 ${!isScrolled ? 'drop-shadow-md' : ''}`}
              />
              <div className={`flex flex-col font-bold tracking-tighter leading-tight sm:leading-normal ${isScrolled ? 'text-secondary' : 'text-white drop-shadow-md'}`}>
                <span className="text-sm sm:text-lg lg:text-xl max-w-[140px] sm:max-w-none sm:whitespace-nowrap flex-wrap">
                  <span className="text-primary block sm:inline">MAHABIR</span>{' '}
                  <span className="block sm:inline">HOME HEALTH CARE</span>
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919330391658"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-md hover:shadow-lg ml-2"
            >
              <PhoneCall size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full left-0 top-full flex flex-col">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center px-3 py-4 text-base font-medium text-slate-800 hover:text-primary hover:bg-slate-50 rounded-md border-b border-slate-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <div className="px-3 pt-4">
              <a
                href="tel:+919330391658"
                className="w-full bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <PhoneCall size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
