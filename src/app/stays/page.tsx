import React from 'react';
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { StayTypes } from "@/components/sections/StayTypes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stays | Woodside Serene",
  description: "Choose how you would like to stay. From a private Glass House to comfortable Family Tents.",
};

export default function StaysPage() {
  return (
    <main className="min-h-screen flex flex-col bg-woodside-50 font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-woodside-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="/Images/General Farm Photos/general-farm-photos-41.jpeg" alt="Jawadhu Hills" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-woodside-950 via-woodside-950/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            Our Stays
          </h1>
          <p className="text-woodside-200 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Four distinctive ways to stay at the farm. Find the rhythm that suits you best.
          </p>
        </div>
      </section>

      {/* Main Content - Reusing the Homepage StayTypes component */}
      <div className="py-12 bg-woodside-50">
        <StayTypes />
      </div>

      <Footer />
    </main>
  );
}
