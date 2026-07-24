'use client';

import React from 'react';
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const locations = [
  {
    title: "Vainu Bappu Observatory",
    desc: "One of Asia's largest observatories. Located just down the road from our farm, it houses the massive 93-inch telescope. The area is intentionally kept dark, making it a stargazer's paradise.",
    distance: "3 km",
    time: "10 min drive",
    image: "/Images/Explore/vainu-bappu-observatory.jpg", 
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2"
  },
  {
    title: "Bheeman Falls",
    desc: "A beautiful, seasonal waterfall cascading through the dense forests of Jawadhu Hills. Best visited right after the monsoon when the flow is at its peak.",
    distance: "20 km",
    time: "45 min drive",
    image: "/Images/Explore/bheeman-falls.jpg", 
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    title: "Kolappan Lake",
    desc: "A serene, hidden lake perfect for quiet reflection or a late afternoon picnic away from the crowds.",
    distance: "15 km",
    time: "30 min drive",
    image: "/Images/Explore/kolappan-lake.jpg",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2"
  },
  {
    title: "Andiappanur Dam",
    desc: "An impressive dam structure offering panoramic views of the water against the backdrop of the rolling hills.",
    distance: "25 km",
    time: "50 min drive",
    image: "/Images/Explore/andiappanur-dam.jpg",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    title: "Local Villages & Hill Routes",
    desc: "You don't need a map for this one. Step right out of the farm gates and walk the quiet village paths to see the authentic, unhurried hill life.",
    distance: "0 km",
    time: "Step outside",
    image: "/Images/General Farm Photos/general-farm-photos-33.jpeg",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
  }
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen flex flex-col bg-woodside-50 font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-woodside-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="/Images/Explore/vainu-bappu-observatory.jpg" alt="Jawadhu Hills" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-woodside-950 via-woodside-950/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            Explore Jawadhu
          </h1>
          <p className="text-woodside-200 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Untouched hills, hidden waterfalls, and dark skies. Discover the secrets of one of Tamil Nadu's quietest ranges.
          </p>
        </div>
      </section>

      {/* Editorial Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
            {locations.map((loc, idx) => (
              <div 
                key={idx} 
                className={`group relative rounded-3xl overflow-hidden shadow-lg border border-woodside-200/50 bg-woodside-900 ${loc.colSpan} ${loc.rowSpan}`}
              >
                <img 
                  src={loc.image} 
                  alt={loc.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-woodside-950 via-woodside-950/60 to-transparent transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="text-3xl font-serif font-bold mb-3">{loc.title}</h3>
                    <p className="text-woodside-100 font-light leading-relaxed mb-6 line-clamp-3">
                      {loc.desc}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm font-semibold tracking-wider uppercase text-woodside-300">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{loc.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{loc.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-woodside-100 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-woodside-950 mb-6">Need help planning your itinerary?</h2>
          <p className="text-woodside-800 font-light mb-10 text-lg">
            Whether you want a packed day of sightseeing or just a quiet walk to a nearby village, our team can help organize transport and local guides during your stay.
          </p>
          <Link href="/booking" className="inline-flex items-center gap-2 bg-woodside-950 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-woodside-900 transition-colors shadow-lg">
            Book Your Stay <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
