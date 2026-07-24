import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Rhythm } from "@/components/sections/Rhythm";
import { StayTypes } from "@/components/sections/StayTypes";
import { Stargazing } from "@/components/sections/Stargazing";
import { FoodAndHospitality } from "@/components/sections/FoodAndHospitality";
import { OurPeople } from "@/components/sections/OurPeople";
import { ThingsToDo } from "@/components/sections/ThingsToDo";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { Location } from "@/components/sections/Location";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/ui/Footer";
import { FloatingWidgets } from "@/components/ui/FloatingWidgets";
import { Navbar } from "@/components/ui/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Woodside Serene | Luxury Farm Stay & Glamping in Jawadhu Hills",
  description: "Experience premium luxury camping, glass house stays, and peaceful nature retreats amidst the untouched beauty of Jawadhu Hills.",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-woodside-950">
      <Navbar />
      <Hero />
      <About />
      <Rhythm />
      <StayTypes />
      <Stargazing />
      <FoodAndHospitality />
      <OurPeople />
      <ThingsToDo />
      <Testimonials />
      <WhoIsItFor />
      <Location />
      <FinalCTA />
      <Footer />
      <FloatingWidgets />
    </main>
  );
}
