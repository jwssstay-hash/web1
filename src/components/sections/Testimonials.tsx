'use client';

import React, { useEffect, useState } from 'react';

const fallbackReviews = [
  { name: "Rahul S.", time: "a month ago", rating: 5, text: "The Glass House is surreal! Best weekend getaway we've had in years. The views at sunrise are incredible and the hospitality is top-notch." },
  { name: "Priya M.", time: "2 months ago", rating: 5, text: "Incredibly peaceful. The staff is so welcoming and the food is just amazing authentic South Indian. Loved the stargazing." },
  { name: "Arun K.", time: "3 weeks ago", rating: 5, text: "Loved the family tent experience. Kids had a great time around the campfire and the morning trek. Murugan and Sumathy took great care of us." }
];

export function Testimonials() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { db } = await import('@/lib/firebase');
        const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
        const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const fetched = snapshot.docs.map(doc => doc.data());
        setReviews(fetched.length > 0 ? fetched : fallbackReviews);
      } catch (error) {
        console.error("Error fetching testimonials", error);
        setReviews(fallbackReviews);
      }
      setIsLoading(false);
    };

    fetchStories();
  }, []);

  return (
    <section className="py-24 md:py-36 bg-woodside-50 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-woodside-950 tracking-tight mb-4">
            Guest stories
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="text-4xl font-serif font-bold text-woodside-900">4.8</span>
            <div className="flex flex-col text-left">
              <div className="flex gap-1 text-[#FBBC04]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-xs text-woodside-600 font-medium">Google Reviews</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
             <div className="col-span-1 md:col-span-3 text-woodside-500 font-medium p-12 text-center animate-pulse">Loading stories...</div>
          ) : (
            reviews.map((review, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-3xl shadow-xl shadow-woodside-900/5 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-woodside-100 flex items-center justify-center text-woodside-700 font-serif font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-woodside-950 font-sans">{review.name}</p>
                      <p className="text-xs text-woodside-500">{review.time || "a month ago"}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-[#FBBC04] mb-4">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-woodside-800 font-light leading-relaxed">"{review.text}"</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
