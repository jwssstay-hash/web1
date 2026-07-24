'use client';

import React from 'react';
import Link from 'next/link';

const stays = [
  {
    title: "Glass House",
    subtitle: "For groups that want to stay together",
    description: "An air-conditioned group space with individual beds, attached restrooms and room for conversations that continue late into the evening.",
    slug: "glass-house",
    images: [
      "/Images/Glass Room/Main.jpeg",
      "/Images/Glass Room/glass-house-group-stay-46.jpeg",
      "/Images/Glass Room/glass-house-group-stay-50.jpeg"
    ],
    features: ["Up to 10 guests", "AC", "2 attached restrooms", "Breakfast included"],
    price: "From ₹10,000/night"
  },
  {
    title: "Private Cottages",
    subtitle: "A quiet room for two",
    description: "King-sized comfort, a private sit-out and views that gently bring the outdoors in.",
    slug: "cottages",
    images: [
      "/Images/Cottage Rooms/Main.jpeg",
      "/Images/Cottage Rooms/cottage-rooms-11.jpeg",
      "/Images/Gallery/cottage-rooms-9.jpeg"
    ],
    features: ["2–3 guests", "King bed", "AC", "Ensuite bathroom"],
    price: "From ₹4,500/night"
  },
  {
    title: "Family Tents",
    subtitle: "Camping without leaving comfort behind",
    description: "A spacious tent for families and small groups, with proper mattresses, lighting and a dedicated restroom.",
    slug: "family-tent",
    images: [
      "/Images/Family tent/Main.jpeg",
      "/Images/Family tent/family-tent-25.jpeg",
      "/Images/Family tent/family-tent-26.jpeg"
    ],
    features: ["Up to 6 guests", "Mattresses provided", "Dedicated restroom", "Breakfast included"],
    price: "From ₹3,000/night"
  },
  {
    title: "Camp Tents",
    subtitle: "Simple, close-to-nature camping",
    description: "Compact tents for couples and friends who want the most immersive outdoor experience.",
    slug: "camp-tent",
    images: [
      "/Images/Camp/Main.jpeg",
      "/Images/Gallery/camp-tent-and-restroom-5.jpeg",
      "/Images/Camp/events-and-camp-14.jpeg"
    ],
    features: ["2 guests", "Immersive outdoor", "Shared restroom", "Breakfast included"],
    price: "From ₹1,500/night"
  }
];

export function StayTypes() {
  return (
    <section id="stays" className="py-24 md:py-32 bg-woodside-50 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-left mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-woodside-950 mb-4 tracking-tight">
            Choose how you would like to stay
          </h2>
          <div className="w-16 h-px bg-woodside-900/30 mt-8"></div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {stays.map((stay, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              
              {/* Image Grid/Carousel Simulation */}
              <div className={`relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                {/* Main image */}
                <img 
                  src={stay.images[0]} 
                  alt={stay.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Mini gallery overlay at bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto snap-x hide-scrollbar">
                  {stay.images.slice(1).map((img, i) => (
                    <div key={i} className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 border-white/50 shadow-md shrink-0 snap-start">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-woodside-950 mb-2">{stay.title}</h3>
                  <p className="text-woodside-700 font-medium tracking-wide uppercase text-sm">{stay.subtitle}</p>
                </div>
                
                <p className="text-woodside-800 font-light leading-relaxed text-lg">
                  {stay.description}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-woodside-900/10">
                  {stay.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-woodside-600"></div>
                      <span className="text-woodside-900 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
                  <Link 
                    href={`/stays/${stay.slug}`}
                    className="w-full sm:w-auto bg-woodside-950 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-woodside-900 transition-colors text-center shadow-lg"
                  >
                    Explore this stay
                  </Link>
                  <Link 
                    href="/booking"
                    className="w-full sm:w-auto bg-transparent border border-woodside-950 text-woodside-950 px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-woodside-50 transition-colors text-center"
                  >
                    Check availability
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
