'use client';
import React from 'react';
import DynamicLayout from '@/components/DynamicLayout';
import UpperFooterImage from '@/components/UpperFooterImage'
const Page = () => {
  return (
    <div className="w-full">
      {/* Banner section with background image */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat  min-h-[700px] flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
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
      <div className="w-full px-4 py-12 flex justify-center bg-[#0D0D0D]">
        <div className="w-full max-w-[1000px] h-[600px]">
          <iframe
            src="https://portfolio.topitexam.com/"
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