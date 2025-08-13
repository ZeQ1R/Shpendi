import React from 'react';
import { ArrowDown, Clock, Link, MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

const Hero = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
    <section
  id="hero"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-20"
>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-l from-red-500/10 to-red-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-600/5 to-red-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          
          {/* Main heading */}
            <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                {restaurantInfo.name}
                </span>
                <span className="block text-lg sm:text-xl md:text-3xl lg:text-4xl font-light text-gray-300 mt-4">
                {restaurantInfo.tagline}
                </span>
            </h1>
            </div>


          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            {restaurantInfo.description}
          </p>

          {/* Quick info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Opening Hours</h3>
              <p className="text-gray-300 text-sm">Mon-Fri: {restaurantInfo.hours.weekdays}</p>
              <p className="text-gray-300 text-sm">Sat-Sun: {restaurantInfo.hours.weekends}</p>
            </div>
            <a href="https://maps.app.goo.gl/7BRyxjdFzVZVLEXP7" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center mb-3">
                    <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                    </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300 text-sm">{restaurantInfo.address}</p>
                
                </div>
            </a>
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300 hover:scale-105">
              <a href={`tel:${restaurantInfo.phone}`}>
              <div className="flex items-center justify-center mb-3">
                
                <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Reservations</h3>
              <p className="text-gray-300 text-sm">{restaurantInfo.phone}</p>
              </a>
            </div>
            
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={scrollToMenu}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25"
            >
              Explore Our Menu
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-red-500 to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;