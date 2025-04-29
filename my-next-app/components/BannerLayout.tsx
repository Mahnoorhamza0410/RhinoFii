'use client';
import React from 'react';
import { Particles } from '@/components/magicui/particles'; // adjust the path if needed
export default function BannerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-bg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
        style={{ objectPosition: 'top center' }}
      />

      {/* Particles over image */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <Particles />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 pt-[120px] flex flex-col justify-start items-center text-center z-10">
        {children}
      </div>
    </div>
  );
}
