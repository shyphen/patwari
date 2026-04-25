import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Menu', 'Gallery', 'Blog', 'Location', 'Reviews', 'Contact'];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-red/95 backdrop-blur-md shadow-lg py-3' : 'bg-red py-4'} border-b-2 border-gold`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="font-head text-2xl md:text-3xl font-black text-gold tracking-wider cursor-pointer" onClick={() => scrollTo('home')}>
          PATWARI<span className="text-white"> ZAIKA</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link}>
                <button onClick={() => scrollTo(link)} className="text-white/80 hover:text-gold transition-colors font-medium text-sm tracking-wide uppercase">
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => scrollTo('contact')} className="bg-gold hover:bg-lgold text-text font-head font-bold px-6 py-2 transition-colors uppercase tracking-wider text-sm shadow-md">
            Reserve Table
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gold">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-red/95 backdrop-blur-md border-b border-gold py-6 px-4 md:hidden flex flex-col space-y-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <button key={link} onClick={() => scrollTo(link)} className="text-white text-lg font-head font-bold uppercase tracking-wider text-left border-b border-white/10 pb-2">
                {link}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="bg-gold text-text font-head font-bold px-6 py-3 uppercase tracking-wider text-sm mt-4 w-full text-center">
              Reserve Table
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
