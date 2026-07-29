'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import Telescope from 'lucide-react/dist/esm/icons/telescope';
import Leaf from 'lucide-react/dist/esm/icons/leaf';
import Flame from 'lucide-react/dist/esm/icons/flame';
import Utensils from 'lucide-react/dist/esm/icons/utensils';
import Map from 'lucide-react/dist/esm/icons/map';
import Baby from 'lucide-react/dist/esm/icons/baby';
import Gift from 'lucide-react/dist/esm/icons/gift';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';

const experiences = [
  {
    id: "stargazing",
    title: "Stargazing",
    icon: <Telescope className="w-6 h-6 text-woodside-400" />,
    desc: "Located near the Vainu Bappu Observatory, Jawadhu Hills offers some of the clearest night skies in South India. Step away from artificial light and experience constellations like never before.",
    image: "/Images/General Farm Photos/general-farm-photos-42.jpeg"
  },
  {
    id: "farm-walks",
    title: "Farm walks",
    icon: <Leaf className="w-6 h-6 text-woodside-400" />,
    desc: "Take an unhurried morning walk through our 5-acre property. Learn about local flora, spot native birds, and let the quietness of the hills set the tone for your day.",
    image: "/Images/General Farm Photos/general-farm-photos-39.jpeg"
  },
  {
    id: "campfires",
    title: "Campfire evenings",
    icon: <Flame className="w-6 h-6 text-woodside-400" />,
    desc: "As the hills cool down, gather around the fire. Share stories, enjoy hot snacks, and reconnect with friends and family without digital distractions.",
    image: "/Images/General Farm Photos/general-farm-photos-34.jpeg"
  },
  {
    id: "food",
    title: "Food experiences",
    icon: <Utensils className="w-6 h-6 text-woodside-400" />,
    desc: "Home-style South Indian cooking prepared with care. From filter coffee at sunrise to plantain-leaf meals, our kitchen serves food that feels familiar and comforting.",
    image: "/Images/General Farm Photos/general-farm-photos-35.jpeg"
  },
  {
    id: "local-exploration",
    title: "Local exploration",
    icon: <Map className="w-6 h-6 text-woodside-400" />,
    desc: "Venture out to Bheeman Falls, Kolappan Lake, or the Andiappanur Dam. We can guide you to the best local spots for a day trip.",
    image: "/Images/General Farm Photos/general-farm-photos-41.jpeg"
  },
  {
    id: "children",
    title: "Children at the farm",
    icon: <Baby className="w-6 h-6 text-woodside-400" />,
    desc: "Safe, open spaces where kids can run free, play in the dirt, and experience nature away from screens and city concrete.",
    image: "/Images/Family tent/family-tent-28.jpeg"
  },
  {
    id: "celebrations",
    title: "Private celebrations",
    icon: <Gift className="w-6 h-6 text-woodside-400" />,
    desc: "Birthdays, anniversaries, or just a gathering of old friends. We can help arrange special dinners and quiet celebrations under the stars.",
    image: "/Images/Glass Room/glass-house-group-stay-54.jpeg"
  },
  {
    id: "corporate",
    title: "Corporate retreats",
    icon: <Briefcase className="w-6 h-6 text-woodside-400" />,
    desc: "Step out of the boardroom. Jawadhu Hills provides the perfect backdrop for team-building, strategy sessions, and restorative company off-sites.",
    image: "/Images/Glass Room/glass-house-group-stay-50.jpeg"
  }
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen flex flex-col bg-woodside-50 font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-woodside-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="/Images/General Farm Photos/general-farm-photos-42.jpeg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-woodside-950 via-woodside-950/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            The Experience
          </h1>
          <p className="text-woodside-200 text-lg md:text-xl font-light max-w-2xl mx-auto">
            More than just a place to sleep. Discover what a slower rhythm feels like at Woodside Serene.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {experiences.map((exp, idx) => (
              <div key={idx} id={exp.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-woodside-200/50 hover:shadow-xl transition-shadow duration-500">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-woodside-950/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-woodside-50 flex items-center justify-center border border-woodside-200">
                      {exp.icon}
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-woodside-950">{exp.title}</h2>
                  </div>
                  <p className="text-woodside-800 font-light leading-relaxed flex-1">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-woodside-950 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Ready to disconnect?</h2>
          <Link href="/booking" className="inline-flex items-center gap-2 bg-white text-woodside-950 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-woodside-100 transition-colors shadow-lg">
            Check Availability <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
