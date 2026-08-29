import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

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
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tighter ${isScrolled ? 'text-secondary' : 'text-white drop-shadow-md'}`}>
              <span className="text-primary">MAHABIR</span> HOME HEALTH CARE
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919330391658"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <PhoneCall size={18} />
              <span>9330391658</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full flex flex-col">
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
