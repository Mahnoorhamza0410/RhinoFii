'use client';
import dynamic from "next/dynamic";
import React from "react";
import UpperFooterImage from '@/components/UpperFooterImage'
import DynamicLayout from '@/components/DynamicLayout';
// import { Particles } from "@/components/magicui/particles";

const Particles = dynamic(() => import("@/components/magicui/particles").then((mod) => mod.Particles), { ssr: false });

const page = () => {
  return (
    // <div className="w-full flex flex-col items-center pt-[150px] ">
      <div className="w-full flex flex-col items-center">
      {/* Heading */}
      {/* <div className="text-center w-full">
        <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ADADAD] font-extrabold text-[70px] leading-[130%]">
          SOLIDITY WHITEPAPER
        </h1>
      </div> */}
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
          title="SOLIDITY WHITEPAPER"
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-[1074px] s pt-[84px] pb-[100px] px-4 mt-[-350px]">
        <h5 className="text-white font-bold text-[24px]">Abstract</h5>
        <p className="text-white font-light text-[18px] tracking-wider">
          Solidity is a groundbreaking LP reflection token on the PulseChain ecosystem.
          Designed to empower investors with a fair, transparent, and hyper-deflationary platform, Solidity integrates cutting-edge features such as dynamic sell tax, LP reflection rewards, and token-burning mechanisms to enhance value over time.
          Our mission is to create a sustainable, wealth-building community that provides education, tools, and incentives to support long-term holders.
        </p>

        <div className="mt-8">
          <h5 className="text-white font-bold text-[24px]">Introduction</h5>
          <p className="text-white font-light text-[18px] tracking-wider">
            Cryptocurrency is revolutionizing the way we perceive and interact with financial systems. Despite this, many projects lack the transparency and long-term strategies needed to foster trust and sustainable growth.
            Solidity addresses these challenges by creating a fair launch, hyper-deflationary token that aligns with the principles of decentralization, fairness, and community empowerment.
            Solidity is the first LP reflection token on PulseChain, offering rewards in SolidX and Gelato while simultaneously burning tokens to increase scarcity. Through advanced features and partnerships, Solidity provides tools, education, and incentives to ensure that holders achieve wealth and financial freedom.
          </p>
        </div>

        <div className="mt-8">
          <h5 className="text-white font-bold text-[24px]">Key Features</h5>

          <div className="text-white font-light text-[18px] tracking-wider space-y-6 mt-4">
            {/* 1. Fair Launch */}
            <div>
              <p><strong>1. Fair Launch</strong></p>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Transparency: Solidity launched without private presales or insider advantages, ensuring a level playing field for all participants.</li>
                <li>Community-Driven: Early adopters are treated equally, fostering trust and long-term engagement.</li>
              </ul>
            </div>

            {/* 2. Dynamic Sell Tax */}
            <div>
              <p><strong>2. Dynamic Sell Tax</strong></p>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Initial Tax: Begins at 12% to discourage short-term selling.</li>
                <li>Reduction Mechanism: Decreases by 2% every 30 days, rewarding long-term holders and encouraging stability.</li>
              </ul>
            </div>

            {/* 3. LP Reflection Rewards */}
            <div>
              <p><strong>3. LP Reflection Rewards</strong></p>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Holders earn rewards directly from the liquidity pool, incentivizing participation and promoting token stability.</li>
              </ul>
            </div>

            {/* 4. Hyper-Deflationary Mechanics */}
            <div>
              <p><strong>4. Hyper-Deflationary Mechanics</strong></p>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Token Burns: A portion of SolidX and Gelato is burned with each transaction, reducing supply and increasing scarcity over time.</li>
              </ul>
            </div>

            {/* 5. Multi-Token Rewards */}
            <div>
              <p><strong>5. Multi-Token Rewards</strong></p>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Rewards are distributed in both SolidX and Gelato, providing diversified earning opportunities for holders.</li>
              </ul>
            </div>

            {/* 6. Advanced Tools for Holders */}
            <div>
              <p><strong>6. Advanced Tools for Holders</strong></p>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>LP Tracking: Monitor and analyze liquidity pool performance.</li>
                <li>Smart Money Insights: Gain actionable intelligence to optimize strategies.</li>
                <li>Educational Resources: Partnerships with communities like No Permissions and Randy Hilarski provide ongoing education and support.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h5 className="text-white font-bold text-[24px]">Tokenomics</h5>

          <div className="text-white font-light text-[18px] tracking-wider space-y-6 mt-4">
            {/* 1. Supply Allocation */}
            <div>
              <p><strong>1. Supply Allocation</strong></p>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Total Supply: 1,000,000,000 Solidity tokens (SOLID).</li>
                <li>Ecosystem Development: 40%</li>
                <li>Liquidity Pool: 30%</li>
                <li>Marketing and Partnerships: 20%</li>
                <li>Team and Advisors: 10%</li>
              </ul>
            </div>

            {/* 2. Reward Mechanism */}
            <div>
              <p><strong>2. Reward Mechanism</strong></p>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>LP Reflection Rewards: 5% of every transaction.</li>
                <li>Burn Mechanism: 2% of every transaction is burned.</li>
              </ul>
            </div>

            {/* 3. Dynamic Sell Tax */}
            <div>
              <p><strong>3. Dynamic Sell Tax</strong></p>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Initial Tax: 12%</li>
                <li>Reduces by 2% every 30 days until reaching a minimum of 4%.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-white font-light text-[18px] tracking-wider space-y-6">

          {/* Conclusion */}
          <div>
            <h5 className="font-bold text-[24px]">Conclusion</h5>
            <p>
              Solidity is more than a token; it’s a community-driven ecosystem built on transparency, innovation, and sustainability.
              By rewarding long-term holders, fostering education, and leveraging hyper-deflationary mechanics, Solidity is poised to redefine wealth creation in the cryptocurrency space.
              Join us as we build the future of decentralized finance on PulseChain.
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <h5 className="font-bold text-[24px]">Disclaimer</h5>
            <p>
              Cryptocurrency investments involve risks. Solidity does not guarantee financial returns or success.
              Participants are advised to conduct thorough research and consult financial advisors before investing.
            </p>
          </div>
        </div>
      </div>
      <UpperFooterImage/>
    </div>
  )
}

export default page
