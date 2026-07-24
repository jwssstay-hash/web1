'use client';

import React from 'react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-32 md:py-48 bg-woodside-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-woodside-950 mb-8 tracking-tight">
          Ready to slow down?
        </h2>
        
        <p className="text-xl md:text-2xl text-woodside-800 font-light mb-12 max-w-2xl mx-auto">
          Disconnect from the noise. Reconnect with nature. Join us in Jawadhu Hills for an unforgettable weekend.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/booking"
            className="w-full sm:w-auto bg-woodside-950 text-white px-10 py-4 rounded-full font-bold tracking-wide uppercase text-sm hover:bg-woodside-900 transition-all shadow-xl hover:-translate-y-1 hover:shadow-2xl"
          >
            Check Availability
          </Link>
          <a 
            href="https://wa.me/919488056637"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-transparent border-2 border-woodside-900 text-woodside-950 px-10 py-4 rounded-full font-bold tracking-wide uppercase text-sm hover:bg-woodside-100 transition-all"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
      
      {/* Abstract natural elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
