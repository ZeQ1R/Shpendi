import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';
import { useTranslation } from 'react-i18next';



const Navbar = () => {

  const { t,i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* <img src='images/shpendi.png' /> */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            {/* <div className="bg-gradient-to-r from-black-500 to-black-500 p-2 rounded-full"> */}
              {/* <Utensils className="h-6 w-6 text-white" /> */}
              <img src="src/images/shpendi.png" className='h-18 w-18 mt-1' onClick={() => scrollToSection('hero')}/>
            {/* </div> */}
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Shpendi
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'about', 'menu', 'testimonials', 'contact'].map((key) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key.toLowerCase() === 'home' ? 'hero' : key.toLowerCase())}
                  className="relative text-gray-300 hover:text-red-400 px-3 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  {t(`navbar.${key}`)}
                  {/* {item} */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <select
  onChange={(e) => i18n.changeLanguage(e.target.value)}
  className="w-34 bg-gray-800 text-gray-300 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
>
  <option value="en">English</option>
  <option value="al">Shqip</option>
  <option value="mk">Македонски</option>
</select>

            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-colors duration-300"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md">
          {['Home', 'About', 'Menu', 'Testimonials', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-red-400 hover:bg-gray-800 transition-colors duration-300"
            >
              {item}
            </button>
          ))}
          <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="w-25 bg-gray-800 text-gray-300 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
      >
        <option value="en">English</option>
        <option value="al">Shqip</option>
        <option value="mk">Македонски</option>
      </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;