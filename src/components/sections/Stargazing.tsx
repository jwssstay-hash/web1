'use client';

import React from 'react';

export function Stargazing() {
  return (
    <section className="relative py-24 md:py-36 bg-woodside-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Images/General Farm Photos/general-farm-photos-42.jpeg" 
          alt="Jawadhu Hills Night Sky" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-woodside-950/60 via-woodside-950/40 to-woodside-950" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 drop-shadow-md">
              Some places offer a view.<br />
              <span className="text-woodside-200">Here, the night sky is the experience.</span>
            </h2>
            
            <p className="text-lg md:text-xl font-light text-woodside-100 leading-relaxed mb-10 drop-shadow-md max-w-lg">
              Nestled close to the renowned Vainu Bappu Observatory, Woodside Serene offers an escape into one of Tamil Nadu’s finest stargazing destinations. Away from the city’s bright lights, clear nights reveal a breathtaking canopy of stars, creating an unforgettable celestial experience.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-woodside-200 mt-2.5"></div>
                <span className="text-woodside-50 font-medium">Strict lights-out policy for stargazing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-woodside-200 mt-2.5"></div>
                <span className="text-woodside-50 font-medium">Guided viewing of constellations (seasonal)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-woodside-200 mt-2.5"></div>
                <span className="text-woodside-50 font-medium">Close to Vainu Bappu Observatory</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-woodside-200 mt-2.5"></div>
                <span className="text-woodside-50/70 text-sm italic">Note: Visibility is always subject to local weather and moon phases.</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
