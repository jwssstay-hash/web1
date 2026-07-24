import { FoodAndHospitality } from "@/components/sections/FoodAndHospitality";
import { OurPeople } from "@/components/sections/OurPeople";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food & Hospitality | Woodside Serene",
  description: "Experience comforting home-style South Indian meals and warm hospitality at Woodside Serene.",
};

export default function FoodPage() {
  return (
    <main className="min-h-screen flex flex-col bg-woodside-50">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="pt-24 md:pt-32 bg-woodside-50"></div>
      
      <div className="flex-grow">
        <FoodAndHospitality hideButton={true} />
        <OurPeople />
      </div>

      <Footer />
    </main>
  );
}
