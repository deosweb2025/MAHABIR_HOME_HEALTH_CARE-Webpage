import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Moon, Sun } from 'lucide-react';
import logoUrl from '../assets/logos/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial dark mode preference
    if (document.documentElement.classList.contains('dark') || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

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
      className={`fixed w-full z-40 transition-all duration-300 bg-brand-ivory dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 ${
        isScrolled ? 'shadow-md py-3' : 'py-4 lg:py-5 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src={logoUrl} 
                alt="Mahabir Home Health Care Logo" 
                className={`h-10 sm:h-12 lg:h-14 w-auto object-contain transition-all duration-300 dark:brightness-110 group-hover:scale-105`}
              />
              <div className="flex flex-col justify-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-black tracking-wide leading-none text-primary dark:text-teal-400">
                  MAHABIR
                </span>
                <span className="text-[0.6rem] sm:text-[0.7rem] lg:text-xs font-sans font-bold tracking-[0.2em] mt-1 text-secondary dark:text-slate-300">
                  HOME HEALTH CARE
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
                className="text-base font-medium transition-colors hover:text-primary dark:hover:text-teal-400 text-secondary dark:text-slate-300"
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors text-secondary hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="tel:+919330391658"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2 shadow-md hover:shadow-lg ml-2"
            >
              <PhoneCall size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors text-secondary dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-secondary dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-brand-ivory dark:bg-slate-900 shadow-xl absolute w-full left-0 top-full flex flex-col border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center px-3 py-4 text-base font-medium text-secondary dark:text-slate-200 hover:text-primary dark:hover:text-teal-400 hover:bg-white dark:hover:bg-slate-800 rounded-md border-b border-slate-200 dark:border-slate-800 last:border-0"
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
