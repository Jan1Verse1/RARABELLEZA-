import React from 'react';
import HeroImg from '../assets/hero1.png';

// Hero Component
const Hero = ({ onBookClick }) => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute -inset-x-1/5 -top-2/5 h-96 bg-gradient-radial from-amber-500/25 via-transparent to-transparent blur-sm pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-5 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs text-amber-700 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-700 to-amber-500 shadow-lg shadow-amber-700/12"></span>
              Classic • Clean • Luxury
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl leading-tight mt-3.5 mb-3 tracking-tight">
              Luxury Beauty Experience<br />for Confident Women.
            </h1>
            
            <p className="text-gray-600 mb-5.5 max-w-prose">
              Book premium beauty services and shop curated wigs & makeup essentials—designed with
              a classic, elevated feel.
            </p>
            
            <div className="flex gap-3 flex-wrap">
              <button 
                onClick={onBookClick}
                className="px-4 py-3 rounded-full bg-gradient-to-br from-amber-700 to-amber-500 text-white font-semibold text-sm shadow-lg shadow-amber-700/22 hover:-translate-y-0.5 transition-all"
              >
                Book Appointment
              </button>
              <button className="px-4 py-3 rounded-full border border-amber-600/55 bg-transparent text-amber-700 font-semibold text-sm hover:bg-amber-600/8 transition-all">
                Shop Collection
              </button>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-amber-700/65 to-transparent mt-3.5"></div>
            
            <p className="text-gray-600 text-xs mt-3.5">
              Bridal Makeup:{' '}
              <a href="mailto:rarabellezaartistry@gmail.com" className="text-amber-700 font-bold no-underline">
                Email to book
              </a>
            </p>
          </div>

          {/* Right Column - Image with Card Overlay */}
          <div className="relative">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={HeroImg} 
                alt="Luxury beauty and makeup" 
                className="w-full h-auto object-cover aspect-[4/5] min-h-96"
              />
            </div>

            {/* Aside Card - Positioned inside/over the image */}
            <aside className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-amber-600/25 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-4 flex items-start justify-between gap-3">
                <div>
                  <strong className="font-serif text-base">Premium Glam, Always.</strong>
                  <div className="text-gray-600 text-xs">White & Gold luxury aesthetic.</div>
                </div>
                <span className="text-xs px-2.5 py-1.5 rounded-full bg-amber-700/10 border border-amber-600/25 text-amber-700 whitespace-nowrap">
                  Online Booking
                </span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;