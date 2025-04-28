'use client';
import React from 'react';
import CountdownTimer from '@/components/CountdownTimer ';

const CountPart = () => {
  return (
    <div>
      {/* Countdown Section */}
      <div
        className="relative w-full bg-no-repeat bg-cover bg-center py-16 mt-20"
        style={{ backgroundImage: "url('/hero-lowbg.png')" }}
      >
        {/* Full Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-90 z-0" />

        {/* Content Layer */}
        <div className="relative z-10 flex items-center justify-center w-full h-full min-h-[200px] max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {/* Title with Icon */}
            <div className="flex items-center gap-3">
              <img src="/Live.png" alt="Get Ready Icon" width={40} height={40} />
              <h5 className="text-2xl font-semibold text-white">Get Ready...</h5>
            </div>

            {/* Countdown Timer */}
            <CountdownTimer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountPart;
