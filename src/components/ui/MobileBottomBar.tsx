'use client';

import React from 'react';
import Phone from 'lucide-react/dist/esm/icons/phone';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import CalendarCheck from 'lucide-react/dist/esm/icons/calendar-check';

export function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-woodside-950/10 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] z-50 flex items-center justify-around px-2 py-3 safe-area-pb">
      <a href="tel:+919840741075" className="flex flex-col items-center justify-center gap-1 text-woodside-950 w-full hover:bg-woodside-50 rounded-lg py-1 transition-colors">
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
      </a>
      
      <div className="w-px h-8 bg-woodside-950/10"></div>
      
      <a href="https://wa.me/919840741075" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 text-[#25D366] w-full hover:bg-green-50 rounded-lg py-1 transition-colors">
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] font-medium uppercase tracking-wider text-woodside-950">WhatsApp</span>
      </a>
      
      <div className="w-px h-8 bg-woodside-950/10"></div>
      
      <a href="/booking" className="flex flex-col items-center justify-center gap-1 text-woodside-950 w-full hover:bg-woodside-50 rounded-lg py-1 transition-colors">
        <CalendarCheck className="w-5 h-5" />
        <span className="text-[10px] font-medium uppercase tracking-wider">Check Availability</span>
      </a>
    </div>
  );
}
