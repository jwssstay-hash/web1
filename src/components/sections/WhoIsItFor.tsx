'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Heart, Briefcase, Baby } from 'lucide-react';

const groups = [
  {
    title: "Families",
    icon: <Baby className="w-8 h-8 text-woodside-200 mb-6" />,
    desc: "Safe, open spaces for children to run, and comfortable accommodations where multiple generations can unwind together.",
    image: "/Images/Family tent/Main.jpeg",
    link: "/stays/family-tent"
  },
  {
    title: "Groups of friends",
    icon: <Users className="w-8 h-8 text-woodside-200 mb-6" />,
    desc: "One common space, flexible sleeping, shared meals and evenings around the campfire designed to bring everyone together.",
    image: "/Images/Glass Room/glass-house-group-stay-54.jpeg",
    link: "/stays/glass-house"
  },
  {
    title: "Couples",
    icon: <Heart className="w-8 h-8 text-woodside-200 mb-6" />,
    desc: "A private corner of the farm. Quiet cottages, starry night walks, and the perfect setting to disconnect and just be.",
    image: "/Images/Cottage Rooms/cottage-rooms-10.jpeg",
    link: "/stays/cottages"
  },
  {
    title: "Small corporate retreats",
    icon: <Briefcase className="w-8 h-8 text-woodside-200 mb-6" />,
    desc: "Step out of the boardroom. Team-building walks, distraction-free strategy sessions, and restorative evenings.",
    image: "/Images/General Farm Photos/general-farm-photos-41.jpeg",
    link: "/booking"
  }
];

export function WhoIsItFor() {
  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-woodside-950 tracking-tight mb-4 max-w-3xl mx-auto">
            Made for the people you want more time with
          </h2>
          <div className="w-16 h-px bg-woodside-900/30 mx-auto mt-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {groups.map((group, index) => (
            <Link 
              href={group.link} 
              key={index}
              className="group block rounded-3xl overflow-hidden bg-woodside-50 border border-woodside-200/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-woodside-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={group.image} 
                  alt={group.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                {group.icon}
                <h3 className="text-2xl font-serif font-bold text-woodside-950 mb-3 group-hover:text-woodside-600 transition-colors">
                  {group.title}
                </h3>
                <p className="text-woodside-800 font-light leading-relaxed mb-6 flex-1">
                  {group.desc}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-woodside-600 uppercase tracking-widest mt-auto group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
