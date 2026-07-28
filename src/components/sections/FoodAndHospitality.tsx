'use client';

import React from 'react';
import Link from 'next/link';

export function FoodAndHospitality({ hideButton = false }: { hideButton?: boolean }) {
  return (
    <section className="py-24 md:py-36 bg-woodside-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <img 
                src="/Images/General Farm Photos/general-farm-photos-35.jpeg" 
                alt="South Indian Meals" 
                className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg" 
              />
              <img 
                src="/Images/General Farm Photos/general-farm-photos-36.jpeg" 
                alt="Filter Coffee" 
                className="w-full h-40 md:h-56 object-cover rounded-2xl shadow-lg" 
              />
            </div>
            <div className="space-y-4">
              <img 
                src="/Images/General Farm Photos/general-farm-photos-39.jpeg" 
                alt="Farm fresh ingredients" 
                className="w-full h-40 md:h-56 object-cover rounded-2xl shadow-lg" 
              />
              <img 
                src="/Images/General Farm Photos/general-farm-photos-34.jpeg" 
                alt="Campfire Snacks" 
                className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg" 
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col text-left space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-serif font-bold text-woodside-950 tracking-tight">
              Food that feels familiar
            </h2>
            
            <p className="text-lg md:text-xl font-light text-woodside-800 leading-relaxed">
              The finest ingredient in every meal isn’t found in the recipe—it’s the time, care and warmth with which it’s prepared.
            </p>
            
            <div className="w-12 h-px bg-woodside-900/30"></div>
            
            <ul className="grid sm:grid-cols-2 gap-4 text-woodside-900 font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-woodside-700"></div> Filter coffee
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-woodside-700"></div> Breakfast spread
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-woodside-700"></div> Plantain-leaf meals
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-woodside-700"></div> Campfire snacks
              </li>
            </ul>

            {!hideButton && (
              <div className="pt-6">
                <Link 
                  href="/food"
                  className="inline-block bg-woodside-950 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-woodside-900 transition-colors shadow-lg"
                >
                  Explore Dining
                </Link>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
