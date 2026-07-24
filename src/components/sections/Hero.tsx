'use client';

import React from 'react';
import BoomerangVideoBg from '../ui/BoomerangVideoBg';

const BG_VIDEO = 'https://res.cloudinary.com/demo/video/upload/v1642142491/docs/nature_loop.mp4';
const HERO_TITLE = 'Where the forest grows quiet and the stars take over.';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-end pb-16 sm:pb-24">
      <BoomerangVideoBg src={BG_VIDEO} />
      <div className="absolute inset-0 bg-gradient-to-b from-woodside-950/30 via-woodside-950/40 to-woodside-950/80" /> 
      
      {/* Hero copy */}
      <div className="relative z-10 flex flex-col items-start text-left px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] max-w-4xl tracking-tight drop-shadow-lg mb-6">
          Where the forest grows quiet<br />
          and the stars take over.
        </h1>
        
        <p className="text-white/90 text-lg sm:text-xl font-light leading-relaxed max-w-2xl drop-shadow-md mb-10">
          A private farm retreat in Jawadhu Hills, near the Vainu Bappu Observatory—created for families, friends and unhurried weekends.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <a 
            href="/stays"
            className="w-full sm:w-auto bg-white text-woodside-950 px-8 py-3.5 rounded-full font-semibold text-sm transition-transform hover:scale-105 shadow-xl text-center"
          >
            Explore the Stays
          </a>
          <a 
            href="/booking"
            className="w-full sm:w-auto bg-transparent border border-white/40 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-colors text-center"
          >
            Check Availability
          </a>
        </div>
        
        {/* Info Strip */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 text-xs sm:text-sm font-medium tracking-wide uppercase">
          <span>Kavalur, Jawadhu Hills</span>
          <span className="hidden sm:inline">•</span>
          <span>Around 3 km from VBO</span>
          <span className="hidden sm:inline">•</span>
          <span>Breakfast Included</span>
        </div>
      </div>
    </section>
  );
}
