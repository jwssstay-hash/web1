'use client';

import React from 'react';
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export default function StoryPage() {
  return (
    <main className="min-h-screen flex flex-col bg-woodside-50 font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-woodside-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="/Images/General Farm Photos/general-farm-photos-39.jpeg" alt="Farm Path" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-woodside-950 via-woodside-950/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            Our Story
          </h1>
          <p className="text-woodside-200 text-lg md:text-xl font-light max-w-2xl mx-auto">
            How a quiet piece of land in the Jawadhu Hills became a sanctuary for those looking to slow down.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          
          <div className="prose prose-lg prose-woodside max-w-none">
            <h2 className="text-3xl font-serif font-bold text-woodside-950 mb-8">It started with the silence.</h2>
            
            <p className="text-woodside-800 font-light leading-relaxed mb-6">
              When we first walked these <strong>5 acres</strong> in Kavalur, it wasn't the trees or the soil that struck us—it was the profound, uninterrupted quiet. In a world that is constantly moving, vibrating, and demanding attention, this small patch of the Jawadhu Hills felt like it had been paused in time.
            </p>
            
            <p className="text-woodside-800 font-light leading-relaxed mb-12">
              We didn't set out to build a resort. We wanted to build a retreat. A place where families could remember what it's like to just sit together. A place where the sky, unpolluted by city lights, could put on a show every night. 
            </p>

            <div className="my-16 flex gap-6">
              <img src="/Images/General Farm Photos/general-farm-photos-41.jpeg" className="w-1/2 h-64 object-cover rounded-2xl shadow-md" alt="Farm" />
              <img src="/Images/General Farm Photos/general-farm-photos-40.jpeg" className="w-1/2 h-64 object-cover rounded-2xl shadow-md" alt="Nature" />
            </div>

            <h2 className="text-3xl font-serif font-bold text-woodside-950 mb-8">Built around 5 acres of nature, not on top of it.</h2>
            
            <p className="text-woodside-800 font-light leading-relaxed mb-6">
              Every structure across our <strong>5-acre estate</strong> was designed to invite the outdoors in. Our Glass House was built specifically so groups could stay up late talking without feeling enclosed. Our tents were placed to maximize the feeling of being close to the earth, while still providing the comfort needed for a good night's rest.
            </p>

            <p className="text-woodside-800 font-light leading-relaxed mb-12">
              But more importantly, Woodside Serene is a working farm. When you eat here, you are tasting the immediate surroundings. When you walk our 5 acres, you are walking alongside the people who tend this land every single day.
            </p>

            <blockquote className="border-l-4 border-woodside-600 pl-6 my-12 italic text-woodside-700 text-xl font-serif">
              "We want our guests to leave with a quieter mind than when they arrived."
            </blockquote>

            <h2 className="text-3xl font-serif font-bold text-woodside-950 mb-8">The Jawadhu Sky</h2>
            
            <p className="text-woodside-800 font-light leading-relaxed mb-6">
              Being located just 3 kilometers from the Vainu Bappu Observatory is not just a geographical fact for us; it's a core part of the Woodside experience. We enforce a strict lights-out policy on clear nights because we believe that the night sky is the greatest luxury we can offer.
            </p>
            
            <p className="text-woodside-800 font-light leading-relaxed mb-12">
              Whether you are here for a weekend of stargazing, a family reunion, or simply to read a book under a tree, we welcome you to our farm.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
