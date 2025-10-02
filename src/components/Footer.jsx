import React from 'react';
import { Utensils, MapPin, Phone, Mail, Instagram, Facebook, Heart } from 'lucide-react';
import { restaurantInfo } from '../data/mock';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';
import logo from '../images/shpendi.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  // const { i18n } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  
  };
const {t} = useTranslation();
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-900 border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-b from-black-600 to-black-500 p-2 rounded-full">
                {/* <Utensils className="h-8 w-8 text-white" /> */}
                <img src={logo} className='h-18 w-18' />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                Shpendi
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t("footer.description")}
            </p>
            
            {/* Social media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full hover:scale-110 transition-transform duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/shpendipizzeria/"
                className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full hover:scale-110 transition-transform duration-300 group"
                aria-label="Facebook"
                target='_blank'
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          
          {/* Quick Links */}
<div>
  <h3 className="text-white font-bold text-lg mb-6">{t("footer.quickLinks.title")}</h3>
  <ul className="space-y-3">
    {[
      { key: "home", id: "hero" },
      { key: "about", id: "about" },
      { key: "menu", id: "menu" },
      { key: "testimonials", id: "testimonials" },
      { key: "contact", id: "contact" }
    ].map((link) => (
      <li key={link.id}>
        <button
          onClick={() => scrollToSection(link.id)}
          className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform"
        >
          {t(`footer.quickLinks.${link.key}`)}
        </button>
      </li>
    ))}
  </ul>
</div>


          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t("contact.info")}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <a href="https://maps.app.goo.gl/7BRyxjdFzVZVLEXP7" target='_blank' rel="noopener noreferrer" className='flex items-start space-x-3'>
                <MapPin className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t("contact.address")}
                </p>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a href={`tel:${restaurantInfo.phone}`} className='flex items-center space-x-3'>
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  {restaurantInfo.phone}
                </p>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a href={`mailto:${restaurantInfo.email}`} className='flex items-center space-x-3'>
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  {restaurantInfo.email}
                </p>
                </a>
              </div>
            </div>

            {/* Opening hours */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">{t("buttons.openingHours")}</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>{t("restaurantInfo.hours.workingdays.weekdays")}: {t("restaurantInfo.hours.workingdays.weekhours")}</p>
                <p>{t("restaurantInfo.hours.workingweekends.weekends")}:   {t("restaurantInfo.hours.workingweekends.weekendhours")}</p>
              </div>
            </div>
          </div>
        </div>

        


        {/* Newsletter section */}
        {/* <div className="py-8 border-t border-gray-800">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 text-center hover:border-red-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with <span className="text-red-400">Shpendi</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Be the first to know about our special events, new menu items, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Shpendi Restaurant. All rights reserved.</span>
            </div>
            <div className='flex items-center space-x-2 text-gray-400 text-sm'>
              <span>Produced by <span className='text-red-400'><a href="https://www.linkedin.com/in/zeqirxheladini/" target='_blank'>Zeqir Xheladini</a></span></span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>{t("footer.paragraph")}</span>
              {/* <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for authentic Albanian cuisine</span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;