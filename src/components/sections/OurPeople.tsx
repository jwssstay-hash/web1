'use client';

import React from 'react';

const staff = [
  {
    name: "Sumathy",
    role: "The Kitchen",
    desc: "Known for her comforting, home-style meals and warm smile that makes every guest feel like family.",
    image: "/Images/General Farm Photos/general-farm-photos-36.jpeg" // Replace with real photo later
  },
  {
    name: "Murugan",
    role: "Guest Care",
    desc: "Always present to ensure you have everything you need, from extra blankets to the perfect campfire setup.",
    image: "/Images/General Farm Photos/general-farm-photos-37.jpeg"
  },
  {
    name: "Jai Appa",
    role: "Farm & Woodlands",
    desc: "The keeper of the land. Join him for a woodland walk to hear stories about the history of Jawadhu Hills.",
    image: "/Images/General Farm Photos/general-farm-photos-40.jpeg"
  }
];

export function OurPeople() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-woodside-950 tracking-tight mb-4">
            A place remembered for its people
          </h2>
          <p className="text-woodside-800 font-light text-lg md:text-xl max-w-2xl mx-auto">
            Competitors can build cottages, but they cannot recreate the warmth of our team.
          </p>
          <div className="w-16 h-px bg-woodside-900/30 mx-auto mt-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {staff.map((person, index) => (
            <div key={index} className="flex flex-col text-center items-center group cursor-default">
              <h3 className="text-3xl font-serif font-bold text-woodside-950 mb-2">{person.name}</h3>
              <p className="text-woodside-600 uppercase tracking-widest text-xs font-bold mb-6">{person.role}</p>
              <p className="text-woodside-800 font-light leading-relaxed">
                {person.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
