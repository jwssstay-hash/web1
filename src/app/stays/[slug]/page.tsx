import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, Check, Info, Users, BedDouble, Ruler, Bath, Wind, Car, Coffee, ShieldAlert } from 'lucide-react';
import { Footer } from '@/components/ui/Footer';

// Rich data model for stays
const stayMap: Record<string, any> = {
  'camp-tent': {
    title: 'Camp Tent',
    folder: 'Camp',
    intro: 'Simple, close-to-nature camping. Designed for those who want the most immersive outdoor experience without sacrificing security.',
    idealFor: 'Couples and friends seeking adventure.',
    capacity: '2 adults',
    bed: 'Mattresses provided inside',
    size: '6.5 ft length (4.5 ft height)',
    bath: '1 Exclusive restroom nearby',
    ac: 'No AC (Nature cooled)',
    breakfast: 'Included (South Indian veg)',
    parking: 'Near reception',
    inclusions: ['Mattresses', 'Blankets & Pillows', 'Breakfast', 'Access to common areas', 'Campfire on request'],
    toKnow: ['Power backup available in common areas', 'Quiet hours after 10 PM', 'Subject to weather conditions', 'No WiFi - reconnect with nature']
  },
  'family-tent': {
    title: 'Family Tent',
    folder: 'Family tent',
    intro: 'Camping without leaving comfort behind. A spacious tent setup perfect for families and small groups wanting an authentic outdoor feel.',
    idealFor: 'Families with children or small groups of friends.',
    capacity: 'Up to 4 adults & 1 kid (Max 6)',
    bed: '4 mattresses inside',
    size: 'Spacious interior',
    bath: 'Dedicated restroom',
    ac: 'Fan & Light provided',
    breakfast: 'Included (South Indian veg)',
    parking: 'Near reception',
    inclusions: ['4 Mattresses', 'Blankets & Pillows', 'Fan & Lighting', 'Breakfast', 'Campfire on request'],
    toKnow: ['Power backup for lighting', 'Quiet hours after 10 PM', 'No WiFi', 'Safe and secure farm environment']
  },
  'glass-house': {
    title: 'Glass House',
    folder: 'Glass Room',
    intro: 'For groups that want to stay together. An expansive, air-conditioned group space designed for conversations that continue late into the evening.',
    idealFor: 'Large families, college reunions, and team outings.',
    capacity: 'Up to 10 guests',
    bed: 'Single cots provided',
    size: '800 Sq ft',
    bath: '2 Attached restrooms',
    ac: 'Air Conditioned',
    breakfast: 'Included (South Indian veg)',
    parking: 'Dedicated parking',
    inclusions: ['AC', 'Dressing area', 'Private group space', 'Breakfast', 'Campfire on request'],
    toKnow: ['Advance meal pre-booking required', 'Respect quiet hours outside the building', 'Private lawn available']
  },
  'cottages': {
    title: 'Private Cottages',
    folder: 'Cottage Rooms',
    intro: 'A private corner of the farm. Designed for couples and small families, our cottages combine the privacy of a hotel room with the quietness of a farm stay.',
    idealFor: 'Couples and small families seeking comfort.',
    capacity: '2-3 guests',
    bed: 'King size cot',
    size: '350 Sq ft',
    bath: 'Attached bathroom',
    ac: 'Airconditioned',
    breakfast: 'Included (South Indian veg)',
    parking: 'Available',
    inclusions: ['King size bed', 'AC', 'private sitout with sunset view', 'Breakfast', 'Extra cot on request'],
    toKnow: ['Food pre-booking required', 'Sunset view', 'Very quiet surroundings']
  },
};

export default async function StayPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const stay = stayMap[resolvedParams.slug];

  if (!stay) {
    notFound();
  }

  // Read images
  const imagesDirectory = path.join(process.cwd(), 'public', 'Images', stay.folder);
  let images: string[] = [];
  try {
    const filenames = fs.readdirSync(imagesDirectory);
    images = filenames
      .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map((name) => `/Images/${stay.folder}/${name}`);
  } catch (error) {
    console.error(`Error reading directory for ${stay.title}:`, error);
  }

  // Fallback if no images
  if (images.length === 0) images = ['/Images/General Farm Photos/general-farm-photos-41.jpeg'];

  return (
    <div className="min-h-screen bg-woodside-50 flex flex-col font-sans">
      
      {/* Header */}
      <header className="w-full p-6 md:px-12 flex items-center justify-between sticky top-0 z-50 bg-woodside-950/95 backdrop-blur-md shadow-lg">
        <Link href="/#stays" className="flex items-center gap-2 text-woodside-100 hover:text-white transition-colors group">
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-bold tracking-wider uppercase text-sm">Back</span>
        </Link>
        <Link href="/booking" className="bg-woodside-100 text-woodside-950 px-6 py-2 rounded-full font-bold tracking-wider uppercase text-sm hover:bg-white transition-colors">
          Book Now
        </Link>
      </header>

      <main className="flex-grow">
        {/* Frame 1: Image Gallery (Horizontal Scroll/Grid) */}
        <section className="w-full bg-woodside-950 pt-8 pb-16">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">{stay.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
              {images.slice(0, 5).map((img, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-12 max-w-7xl py-16 grid lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-16">
            
            {/* Frame 2: Emotional Intro */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-woodside-950 mb-6">{stay.intro.split('.')[0]}.</h2>
              <p className="text-lg text-woodside-800 leading-relaxed font-light">{stay.intro.split('.').slice(1).join('.')}</p>
            </section>

            {/* Frame 3: Quick Facts */}
            <section>
              <h3 className="text-xl font-bold uppercase tracking-widest text-woodside-900 mb-8 pb-2 border-b-2 border-woodside-200">At a glance</h3>
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                <div className="flex items-center gap-4 text-woodside-800">
                  <Users className="text-woodside-600" />
                  <span><strong>Capacity:</strong> {stay.capacity}</span>
                </div>
                <div className="flex items-center gap-4 text-woodside-800">
                  <BedDouble className="text-woodside-600" />
                  <span><strong>Beds:</strong> {stay.bed}</span>
                </div>
                <div className="flex items-center gap-4 text-woodside-800">
                  <Ruler className="text-woodside-600" />
                  <span><strong>Size:</strong> {stay.size}</span>
                </div>
                <div className="flex items-center gap-4 text-woodside-800">
                  <Bath className="text-woodside-600" />
                  <span><strong>Bath:</strong> {stay.bath}</span>
                </div>
                <div className="flex items-center gap-4 text-woodside-800">
                  <Wind className="text-woodside-600" />
                  <span><strong>Comfort:</strong> {stay.ac}</span>
                </div>
                <div className="flex items-center gap-4 text-woodside-800">
                  <Coffee className="text-woodside-600" />
                  <span><strong>Breakfast:</strong> {stay.breakfast}</span>
                </div>
                <div className="flex items-center gap-4 text-woodside-800">
                  <Car className="text-woodside-600" />
                  <span><strong>Parking:</strong> {stay.parking}</span>
                </div>
              </div>
            </section>

            {/* Frame 4: What is included */}
            <section>
              <h3 className="text-xl font-bold uppercase tracking-widest text-woodside-900 mb-6 pb-2 border-b-2 border-woodside-200">What's included</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {stay.inclusions.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-woodside-800">
                    <Check className="w-5 h-5 text-woodside-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Frame 5: What to know */}
            <section className="bg-white p-8 rounded-2xl border border-woodside-200 shadow-sm">
              <h3 className="text-xl font-bold uppercase tracking-widest text-woodside-900 mb-6 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5" />
                Good to know
              </h3>
              <ul className="space-y-4">
                {stay.toKnow.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-woodside-900/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-woodside-400 mt-2 shrink-0"></div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Sticky Sidebar (Frame 6 & 7) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-woodside-950 text-white rounded-3xl p-8 shadow-2xl">
              <p className="text-woodside-200 font-bold uppercase tracking-widest text-xs mb-2">Ideal for</p>
              <p className="font-serif text-xl mb-8">{stay.idealFor}</p>
              
              <div className="pt-8 border-t border-woodside-800">
                <Link href="/booking" className="block text-center w-full bg-white text-woodside-950 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-woodside-100 transition-colors shadow-lg mb-2 mt-4">
                  Check Availability
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
