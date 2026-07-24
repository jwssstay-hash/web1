'use client';

import React from 'react';

const rhythms = [
  {
    time: "Morning",
    description: "Filter coffee, birdsong and a walk through the farm.",
    image: "/Images/General Farm Photos/general-farm-photos-37.jpeg" // Assuming a morning-like picture
  },
  {
    time: "Afternoon",
    description: "A long lunch, a nap, village trails or quiet time beneath the trees.",
    image: "/Images/General Farm Photos/general-farm-photos-34.jpeg"
  },
  {
    time: "Evening",
    description: "Snacks, conversation and a campfire as the hills cool down.",
    image: "/Images/General Farm Photos/general-farm-photos-41.jpeg" // Campfire / evening
  },
  {
    time: "Night",
    description: "Lights dim. Phones disappear. The Jawadhu sky takes centre stage.",
    image: "/Images/General Farm Photos/general-farm-photos-42.jpeg" // Night sky
  }
];

export function Rhythm() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-woodside-950 tracking-tight mb-4">
            The Woodside Serene rhythm
          </h2>
          <div className="w-16 h-px bg-woodside-900/30 mx-auto mt-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {rhythms.map((rhythm, index) => (
            <div key={index} className="flex flex-col group cursor-default">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-lg">
                <div className="absolute inset-0 bg-woodside-950/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={rhythm.image} 
                  alt={rhythm.time} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-woodside-950 mb-3">{rhythm.time}</h3>
              <p className="text-woodside-800 font-light leading-relaxed">
                {rhythm.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
