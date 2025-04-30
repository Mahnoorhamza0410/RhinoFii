'use client';
import dynamic from "next/dynamic";
import React from 'react';
import DynamicLayout from '@/components/DynamicLayout';
import UpperFooterImage from '@/components/UpperFooterImage'
// import { Particles } from "@/components/magicui/particles";

const Particles = dynamic(() => import("@/components/magicui/particles").then((mod) => mod.Particles), { ssr: false });

const Page = () => {
  return (
    <div className="w-full">
      {/* Banner section with background image */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat  min-h-[700px] flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Insert Particles JUST inside Banner */}
                 <div className="absolute inset-0 z-0">
                  <Particles 
                    quantity={40} 
                    staticity={40} 
                    ease={40} 
                    size={1} 
                    color="#ffffff"
                  />
                </div>
        <DynamicLayout
          title="RHINO LEADERBOARD"
          subtitle={
            <>
              Current Giveaway Pool Total:{' '}
              <strong className="font-bold">$3,458</strong>
            </>
          }
        />
      </div>
      {/* Iframe Section */}
      <div className="w-full px-4 py-12 flex justify-center mt-[-250px]">
        <div className="w-full max-w-[1000px] h-[800px] pb-[90px]">
          <iframe
            src="http://bitselexion.com/"
            title="CoinMarketCap"
            className="w-full h-full rounded-md border-2 border-white"
          ></iframe>
        </div>
      </div>
      <UpperFooterImage/>
    </div>
  );
};
export default Page;