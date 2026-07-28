'use client';

import React from 'react';

const staff = [
  {
    name: "Sumathy",
    role: "The Kitchen",
    desc: "Known for meals that taste like home, Sumathy prepares every dish with patience, warmth and recipes that have been part of our villages for generations."
  },
  {
    name: "Murugan",
    role: "Guest Care",
    desc: "Always nearby with a quiet smile, Murugan ensures every guest feels comfortable, cared for and completely at home."
  },
  {
    name: "Govindan (Jai Appa)",
    role: "Guest Experience",
    desc: "Whether it’s sharing stories of the hills, guiding an early morning nature walk or simply making time for a conversation over filter coffee, Govindan reminds us that hospitality is deeply personal."
  },
  {
    name: "Silambu",
    role: "All rounder",
    desc: "Working tirelessly behind the scenes, Silambu ensures that every stay runs smoothly—from preparing rooms to coordinating the countless details guests rarely notice, but always appreciate."
  }
];

export function OurPeople() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-woodside-950 tracking-tight mb-4">
            Meet the people who make Woodside Serene feel like home
          </h2>
          <p className="text-woodside-800 font-light text-lg md:text-xl max-w-2xl mx-auto mt-6">
            Each member of our team has a story, a smile and a genuine desire to make your stay memorable.
          </p>
          <div className="w-16 h-px bg-woodside-900/30 mx-auto mt-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {staff.map((person, index) => (
            <div key={index} className="flex flex-col text-center items-center group cursor-default">
              <h3 className="text-3xl font-serif font-bold text-woodside-950 mb-2">{person.name}</h3>
              <p className="text-woodside-600 uppercase tracking-widest text-xs font-bold mb-6">{person.role}</p>
              <p className="text-woodside-800 font-light leading-relaxed max-w-sm">
                {person.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-24 text-center max-w-3xl mx-auto">
          <div className="w-16 h-px bg-woodside-900/30 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-serif italic text-woodside-900">
            "We may be a small team, but every guest is looked after as though they were visiting our own home"
          </p>
        </div>
        
      </div>
    </section>
  );
}
