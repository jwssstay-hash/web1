'use client';

import React, { useEffect, useState } from 'react';
import { ZoomIn, Loader2, Play } from 'lucide-react';

const CATEGORIES = ["All", "The Farm", "Glass House", "Cottages", "Family Tents", "Camp Tents", "Food", "Stargazing"];

const defaultGalleryImages = [
  { src: "/Images/Glass Room/glass-house-group-stay-54.jpeg", title: "Glass Room", category: "Glass House", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "/Images/General Farm Photos/general-farm-photos-39.jpeg", title: "Farm Path", category: "The Farm", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "/Images/Cottage Rooms/cottage-rooms-10.jpeg", title: "Cottages", category: "Cottages", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { src: "/Images/Family tent/family-tent-30.jpeg", title: "Family Tent", category: "Family Tents", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2" },
  { src: "/Images/Camp/events-and-camp-24.jpeg", title: "Camp", category: "Camp Tents", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "https://res.cloudinary.com/bali5bin/video/upload/v1784915389/drone_tiseph.mp4", title: "Drone View", category: "Videos", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2", type: "video" },
  { src: "/Images/General Farm Photos/general-farm-photos-42.jpeg", title: "Night Sky", category: "Stargazing", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { src: "/Images/General Farm Photos/general-farm-photos-35.jpeg", title: "Food", category: "Food", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "/Images/Cottage Rooms/Main.jpeg", title: "Cottage Exterior", category: "Cottages", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
  { src: "/Images/Glass Room/glass-house-group-stay-50.jpeg", title: "Glass House Interior", category: "Glass House", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { src: "/Images/General Farm Photos/general-farm-photos-36.jpeg", title: "Kitchen", category: "Food", colSpan: "col-span-1", rowSpan: "row-span-1" }
];

export function Gallery() {
  const [galleryImages, setGalleryImages] = useState<any[]>(defaultGalleryImages);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState<any | null>(null);

  useEffect(() => {
    const fetchCustomGallery = async () => {
      try {
        const { db } = await import('@/lib/firebase');
        const { collection, query, orderBy, getDocs } = await import('firebase/firestore');

        const q = query(collection(db, 'gallery'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const customImages = snapshot.docs.map(doc => ({
          src: doc.data().src,
          title: doc.data().title || 'Gallery Image',
          category: doc.data().category || 'The Farm',
          colSpan: doc.data().colSpan || 'col-span-1',
          rowSpan: doc.data().rowSpan || 'row-span-1',
          type: doc.data().type || 'image'
        }));
        
        setGalleryImages([...defaultGalleryImages, ...customImages]);
      } catch (error) {
        console.error("Error fetching custom gallery images", error);
      }
      setIsLoading(false);
    };

    fetchCustomGallery();
  }, []);

  const filteredMedia = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="relative w-full pt-10 min-h-screen pb-24 bg-woodside-50">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-woodside-950 mb-4 tracking-tight">
            Moments at Woodside Serene
          </h2>
          <p className="text-woodside-700 max-w-2xl mx-auto font-light mb-8">
            Filter through our curated collections below to explore what your stay could look like.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                  ? 'bg-woodside-950 text-white shadow-lg' 
                  : 'bg-white text-woodside-800 hover:bg-woodside-200 border border-woodside-200/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 text-woodside-600">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p className="font-medium tracking-wider uppercase text-sm">Loading memories...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            {filteredMedia.map((media, index) => (
              <div 
                key={index} 
                className={`relative group rounded-3xl overflow-hidden cursor-pointer bg-woodside-200 shadow-md hover:shadow-xl transition-all duration-300 ${media.colSpan} ${media.rowSpan}`}
                onClick={() => setSelectedMedia(media)}
              >
                {media.type === 'video' ? (
                  <>
                    <video src={media.src} className="w-full h-full object-cover" muted loop autoPlay playsInline />
                    <div className="absolute inset-0 bg-woodside-950/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50">
                        <Play className="w-5 h-5 text-white ml-1" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={media.src}
                      alt={media.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-woodside-950/0 group-hover:bg-woodside-950/40 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100 w-8 h-8" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-[100] bg-woodside-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
          onClick={() => setSelectedMedia(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white bg-woodside-800/50 hover:bg-woodside-700 p-3 rounded-full transition-colors z-50"
            onClick={() => setSelectedMedia(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center cursor-default" onClick={e => e.stopPropagation()}>
            {selectedMedia.type === 'video' ? (
              <video src={selectedMedia.src} className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain bg-black" controls autoPlay playsInline />
            ) : (
              <img src={selectedMedia.src} alt={selectedMedia.title} className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain" />
            )}
            <p className="text-white mt-6 font-serif text-xl tracking-wide bg-woodside-950/50 px-6 py-2 rounded-full backdrop-blur-md">
              {selectedMedia.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
