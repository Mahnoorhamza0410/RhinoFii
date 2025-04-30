'use client';
import Image from 'next/image';

export default function TwoSectionLayout() {
  const cards = [
    {
      title: (
        <>
          <span className="text-white">LP </span>
          <span className="text-[#8F6CFA]">x</span>
          <span className="text-white">AMPLIFIER</span>

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
          <span className="text-white">GIVEAWAY POOL</span>
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
          Earn % of trading fees PLS Tokens <br />
          <span className="underline"> Auto Deposited.</span>{' '}
        </>
      ),
    },
    {
      title: (
        <>
          <span className="text-white">VIP TOOLS</span>
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
    <div className="flex flex-col md:flex-row gap-6 p-0 sm:p-6 max-w-[1180px] mx-auto pb-[145px]">
      {/* Right Section (Content) */}
      <div className="w-full md:w-2/3 flex flex-col gap-1 sm:gap-6 order-1 md:order-2">

        {/* Heading wrapped with mobile background */}
        <div className="w-full bg-[linear-gradient(90deg,rgba(47,35,82,0.01)_0%,rgba(143,108,250,0.20)_100%)] md:bg-none">
          <div className="px-4 sm:px-0 py-10 sm:py-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center md:text-left">
              Holder Benefits{' '}
              <span className="font-normal italic text-[28px] sm:text-[36px]">Let’s Eat</span>
            </h2>
          </div>
        </div>

        {/* Mobile Image below heading */}
        <div className="block sm:hidden">
          <img
            src="/30.png"
            alt="Vertical"
            className="w-full h-full object-cover my-0 sm:my-4 p-5 sm:p-[0]"
            //remove the round-xl because there is no border radius in figma design 
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
        {/* <div className="grid grid-cols-2 sm:gap-[10px] gap-[16px]">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[rgba(137,137,137,0.15)] bg-gradient-to-br from-[#281F41] to-[#281F41] transition-colors duration-300 text-white py-10 px-5 rounded-[10px] shadow flex flex-col items-center text-center ">
              <Image src={card.icon} alt="icon" width={40} height={40} />
              <h3 className="text-[14px] sm:text-[20px] font-semibold mt-4 mb-2">{card.title}</h3>
              <p className="text-[12px] sm:text-[16px] text-white-300">{card.desc}</p>
            </div>
          ))}
        </div> */}
      <div className="grid grid-cols-2 sm:gap-[10px] gap-[16px] sm:py-15 py-0 p-5 sm:p-0">
  {cards.map((card, idx) => (
    <div
      key={idx}
      // Apply a different background color for the first card and the others
      className={`${
        idx === 0 ? 'bg-[#8F6CFA3D]' : 'bg-[#89898926]'
      } transition-colors duration-300 text-white py-6 px-5 rounded-[10px] shadow flex flex-col items-center text-center`}
    >
      {/* <Image src={card.icon} alt="icon" width={40} height={40} /> */}
      <img
  src={card.icon}
  alt="icon" width={40} height={40}
  className={
    card.icon === '/icons/Earn-fees.svg'
      ? 'mt-[18px]'
      : card.icon === '/icons/LA-AMP.svg'
      ? 'mt-[2px]'
      : ''
  }
/>
      <h3 className="text-[14px] sm:text-[20px] font-semibold mt-4 mb-2">{card.title}</h3>
      <p className="text-[12px] sm:text-[16px] text-white-300">{card.desc}</p>

      
    </div>
  ))}
</div>




      </div>

      {/* Desktop image only */}
      {/* <div className="hidden md:block w-full md:w-1/3 order-2 md:order-1"> */}
      <div className="hidden sm:block max-w-full  order-2 sm:order-1">
        <img
          src="/30.png"
          alt="Vertical"
          className="max-w-full h-auto object-cover"
          //remove the round-xl because there is no border radius in figma design 
        />
      </div>
    </div>
  );
}
