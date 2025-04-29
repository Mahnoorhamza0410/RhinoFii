// import UpperFooterImage from '@/components/UpperFooterImage';
// import DynamicLayout from '@/components/DynamicLayout';
// // import CountdownTimer from '@/components/CountdownTimer ';

// const Pool = () => {
//     return <div>
//       <DynamicLayout title="Welcome to RhinoFi">
//       <p className="text-lg">This is the homepage with a background and dynamic layout.</p>
//     </DynamicLayout>
//      < UpperFooterImage/>
//      {/* <CountdownTimer /> */}
//     </div>;

//   };

//   export default Pool;

'use client';
import React from 'react';
import DynamicLayout from '@/components/DynamicLayout';
import UpperFooterImage from '@/components/UpperFooterImage'
import { Particles } from "@/components/magicui/particles";
const Page = () => {
  return (
    <div className="w-full">
      {/* Banner section with background image */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat min-h-[700px] flex items-center justify-center px-4"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Insert Particles JUST inside Banner */}
        <div className="absolute inset-0 z-0">
          <Particles
            quantity={40}
            staticity={40}
            ease={40}
            size={1}
            color="#FFFFFF"
          />
        </div>
        <DynamicLayout
          title="LIQUIDITY POOLS"
          subtitle={
            <>
              <strong className="font-bold">Manage </strong>
              Your DITY Liquidity Pools, Tax Free, Below.{' '}
              {/* <strong className="font-bold">$3,458</strong> */}
            </>
          }
        />
      </div>
      {/* Iframe Section */}
      <div className="w-full px-4 py-12 flex justify-center mt-[-250px]">
        <div className="w-full max-w-[1000px] h-[800px] pb-[90px]">
          <iframe
            src="https://www.voipbusiness.com/"
            title="CoinMarketCap"
            className="w-full h-full rounded-md border-2 border-white"
          ></iframe>
        </div>
      </div>
      <UpperFooterImage />
    </div>
  );
};
export default Page;
