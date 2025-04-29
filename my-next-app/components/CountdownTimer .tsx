'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CountPart({ targetDate = '2025-12-31T23:59:59' }) {
  const [timeLeft, setTimeLeft] = useState<null | {
    days: number;
    hours: number;
    minutes: number;
  }>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date(targetDate);
      const now = new Date();
      if (isNaN(endDate.getTime())) {
        console.error('Invalid date format');
        return { days: 0, hours: 0, minutes: 0 };
      }
      const difference = +endDate - +now;

      // Static values for now
      return {
        days: 2,
        hours: 8,
        minutes: 48,
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center w-full opacity-40 bg-[linear-gradient(90deg,rgba(47,35,82,0.2)_0%,rgba(143,108,250,0.2)_100%)] mx-auto px-4 py-10 sm:py-12 z-10 "
      // 🔥 Updated: removed -mt-38, increased py (padding-y) for spacing
    >
      {/* Gradient behind countdown */}
      <div
        className="absolute inset-0 z-0"
        style={{
          top: '0px',
          left: '0px',
          width: '100%',
          height: '90px', // 🔥 Mobile height
          // opacity: 0.4,
          // background: 'linear-gradient(90deg, rgba(47, 35, 82, 0.20) 0%, rgba(143, 108, 250, 0.20) 100%)',
        }}
      >
        {/* Responsive height adjustment */}
        <style jsx>{`
          @media (min-width: 640px) {
            div {
              height: 124px !important;
            }
          }
        `}</style>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto px-4 flex flex-wrap items-center justify-center gap-12 sm:gap-10">
        {/* Left: Icon + Text */}
        <div className="flex items-center gap-3 min-w-max z-10">
          <Image src="/Live.png" alt="Get Ready Icon" width={40} height={40} />
          <h5 className="text-[28px] sm:text-[36px] font-semibold text-white whitespace-nowrap">
            Get Ready...
          </h5>
        </div>

        {/* Right: Countdown Cards */}
        <div className="w-full sm:w-auto z-10">
          <div className="flex flex-wrap justify-center gap-5">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-[rgba(144,53,171,0.20)] text-white p-4 rounded-md text-center"
                style={{
                  width: '91px',
                  height: '60px',
                  paddingRight: unit === "minutes" ? "16px" : "8px",
                  paddingLeft: "8px",
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="text-2xl sm:text-3xl font-bold leading-8" style={{ fontSize: '24px' }}>
                  {value}
                </div>
                <div className="text-xs sm:text-base font-normal text-[#B7B7B7] leading-6" style={{ fontSize: '16px' }}>
                  {unit.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
