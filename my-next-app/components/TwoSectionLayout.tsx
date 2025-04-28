'use client';
import Image from 'next/image';

export default function TwoSectionLayout() {
  const cards = [
    {
      title: (
        <>
          <span className="text-white">LP </span>
          <span className="text-[#8F6CFA]">xAMPLIFIER</span>
        </>
      ),
      icon: '/icons/LA-AMP.svg',
      desc: (
        <>
          <span className="underline">LP Double Dipping.</span>{' '}
          Deposit into LP AND Continue to earn fees
        </>
      ),
    },
    {
      title: (
        <>
          <span className="text-white">GIVEAWAY </span>
          <span className="text-[#8F6CFA]">POol</span>
        </>
      ),
      icon: '/icons/Giveaway.svg',
      desc: (
        <>
          Air Dropped monthly to 3 random top 100
          <span className="underline"> RHINO Holders.</span>{' '}
        </>
      ),
    },
    {
      title: (
        <>
          <span className="text-white">EARN </span>
          <span className="text-[#8F6CFA]">FEES</span>
        </>
      ),
      icon: '/icons/Earn-fees.svg',
      desc: (
        <>
          Earn % of trading fees PLS Tokens <br></br>
          <span className="underline"> Auto Deposited.</span>{' '}
        </>
      ),
    },
    {
      title: (
        <>
          <span className="text-white">VIP </span>
          <span className="text-[#8F6CFA]">TOOLS</span>
        </>
      ),
      icon: '/icons/VIP.svg',
      desc: (
        <>
          Access 
          <span className="underline"> Holder </span>{' '}
          only Wealth Building Tools & Courses on<span className="text-[#8F6CFA]"> Solidity.win</span>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-[1180px] mx-auto pb-[145px]">
      {/* Right Section (Content) */}
      <div className="w-full md:w-2/3 flex flex-col gap-6 order-1 md:order-2">
        {/* Heading on top */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center md:text-left">
          Holder Benefits{' '}
          <span className="font-normal italic text-[28px] sm:text-[36px]">Let’s Eat</span>
        </h2>

        {/* Mobile Image below heading */}
        <div className="block md:hidden">
          <img
            src="/holder-benefits.png"
            alt="Vertical"
            className="w-full h-full object-cover rounded-xl my-4"
          />
        </div>

        {/* Quote section (hidden on mobile) */}
        <div className="hidden sm:flex flex-row gap-4 items-center sm:items-start">
          <img src="/BQ.png" className="w-10 h-10 sm:w-auto sm:h-auto" />
          <p className="text-gray-300 text-left">
            ...RhinoFi has positioned itself for long term growth & stability.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-[10px]">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[rgba(137,137,137,0.15)] bg-gradient-to-br from-[#281F41] to-[#281F41] hover:to-[#1A1A1A] transition-colors duration-300 text-white py-10 px-5 rounded-[10px] shadow flex flex-col items-center text-center gap-5">
              <Image src={card.icon} alt="icon" width={40} height={40} />
              <h3 className="text-lg font-semibold mt-4 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop image only */}
      <div className="hidden md:block w-full md:w-1/3 order-2 md:order-1">
        <img
          src="/holder-benefits.png"
          alt="Vertical"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
