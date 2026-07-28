'use client';

import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';

const atWoodside = [
  "Stargazing",
  "Farm and orchard walks",
  "Campfire",
  "Quiet reading",
  "Outdoor meals",
  "Children's farm experiences",
  "Group celebrations"
];

const aroundJawadhu = [
  {
    name: "Vainu Bappu Observatory",
    distance: "2.9 km | 6 Min",
    image: "/Images/Attractions/observatory.png",
    desc: "Asia's largest telescope observatory."
  },
  {
    name: "Bheeman Falls",
    distance: "14.2 km | 18 Min",
    image: "/Images/Attractions/falls.png",
    desc: "A breathtaking hidden waterfall."
  },
  {
    name: "Kolappan Lake",
    distance: "15.5 km | 18 Min",
    image: "/Images/Attractions/lake.png",
    desc: "A serene boating lake."
  },
  {
    name: "Andiappanur Dam",
    distance: "27.7 km | 32 Min",
    image: "/Images/Attractions/dam.png",
    desc: "A picturesque dam at the foothills."
  }
];

export function ThingsToDo() {
  return (
    <section className="py-24 md:py-36 bg-woodside-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4 drop-shadow-lg">
            Things to do
          </h2>
          <div className="w-16 h-px bg-woodside-500/50 mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* At Woodside Serene */}
          <div className="lg:col-span-5 bg-woodside-900/50 border border-woodside-800/50 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-serif font-bold text-white mb-8 flex items-center gap-3">
              <img src="/logo.png" alt="Woodside Serene Logo" className="h-10 w-auto object-contain brightness-0 invert" />
              At Woodside Serene
            </h3>
            <ul className="space-y-5">
              {atWoodside.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-woodside-400 mt-2 flex-shrink-0"></div>
                  <span className="text-woodside-100 font-light text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Around Jawadhu Hills */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-serif font-bold text-white mb-8 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-woodside-400" />
              Around Jawadhu Hills
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {aroundJawadhu.map((place, idx) => (
                <div
                  key={idx}
                  className="bg-woodside-900/50 border border-woodside-800/50 rounded-2xl overflow-hidden group shadow-xl backdrop-blur-sm"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-woodside-950/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-xs text-white font-medium shadow-md">
                      <MapPin size={12} />
                      {place.distance}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-serif text-white mb-2 group-hover:text-woodside-200 transition-colors">{place.name}</h4>
                    <p className="text-sm font-sans text-woodside-100/70 font-light leading-relaxed">{place.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
