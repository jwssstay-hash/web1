'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export function Location() {
  return (
    <section className="py-24 md:py-36 bg-woodside-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col text-left space-y-8 order-last lg:order-first">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-serif font-bold text-white tracking-tight">
              How to get here
            </h2>
            
            <p className="text-lg md:text-xl font-light text-woodside-200 leading-relaxed max-w-lg">
              Woodside Serene is located in Kavalur, surrounded by the Jawadhu Hills. The drive itself is an experience, taking you through winding ghat roads and dense forest cover.
            </p>
            
            <div className="w-12 h-px bg-woodside-700/50"></div>
            
            <div className="space-y-6 pt-2 text-woodside-50">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-woodside-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">From Chennai</h4>
                  <p className="text-woodside-300 font-light mt-1">Approx. 4.5 hours drive (240 km) via Vellore</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-woodside-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">From Bengaluru</h4>
                  <p className="text-woodside-300 font-light mt-1">Approx. 4 hours drive (180 km) via Krishnagiri</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="https://maps.google.com/?q=Woodside+Serene+Jawadhu+Hills" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-woodside-950 px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-woodside-100 transition-colors shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>
          </div>
          
          {/* Map/Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group border border-woodside-800/50">
            {/* A placeholder for the map. We'll use a local landscape image or an actual iframe */}
            <div className="absolute inset-0 bg-woodside-800 animate-pulse"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.464619736801!2d78.7849!3d12.5693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM0JzA5LjUiTiA3OMKwNDcnMDUuNiJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-10 grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}
