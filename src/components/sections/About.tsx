'use client';

import React from 'react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-woodside-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col text-left space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-serif font-bold text-woodside-950 tracking-tight">
              Not a resort.<br />
              <span className="text-woodside-700 italic font-light">A slower way to stay.</span>
            </h2>
            
            <p className="text-lg md:text-xl font-light text-woodside-800 leading-relaxed max-w-lg">
              Spread across five acres in the quiet hills of Kavalur, Woodside Serene is a working farm and intimate nature retreat. Days begin with birdsong and home-cooked breakfast. Evenings slow down around the fire. After dark, the sky becomes the main event.
            </p>
            
            <div className="w-12 h-px bg-woodside-900/30"></div>
            
            <ul className="space-y-4">
              {[
                "5 acres of farm and woodland",
                "Four distinctive ways to stay",
                "Dark-sky stargazing",
                "Home-style meals, prepared fresh"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-woodside-700 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-woodside-900 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Image Content */}
          <div className="relative w-full h-[500px] md:h-[650px] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-woodside-950/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img 
              src="/Images/General Farm Photos/general-farm-photos-33.jpeg" 
              alt="Woodside Serene Property" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
