'use client';

import BannerLayout from '@/components/BannerLayout';
import CountPart from '@/components/CountPart';
import CustomVideo from '@/components/CustomVideo';
import TwoSectionLayout from '@/components/TwoSectionLayout';
import IframeEmbed from '@/components/IframeEmbed';
import ThumbGallerySlider from '@/components/ThumbGallerySlider';
export default function Page() {
  return (
    <main>
  

      {/* Banner with content inside */}
      <BannerLayout>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ADADAD] font-extrabold text-[60px]">
          THE FIRST EVER
        </h1>
        <p className="text-white font-light text-[42px] mt-4">
          Hyper Deflationary, Dynamically Taxed, <br /> Multi-Rewards Machine
        </p>
        <div className="flex justify-center w-full mt-8">
          <a
            href="#"
            className="inline-flex items-center justify-center px-[51px] py-[18px] font-bold text-[22px] rounded-[500px] bg-gradient-to-r from-[#BB57BF] via-[#2E4B94] to-[#2CC8D8] text-white"
          >
            Join The Stampede
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              className="ml-2"
            >
              <rect x="0.5" y="1" width="35" height="35" rx="17.5" stroke="white" />
              <path
                d="M17.9998 34.0833C26.6063 34.0833 33.5832 27.1064 33.5832 18.5C33.5832 9.89355 26.6063 2.91666 17.9998 2.91666C9.3934 2.91666 2.4165 9.89355 2.4165 18.5C2.4165 27.1064 9.3934 34.0833 17.9998 34.0833Z"
                fill="url(#paint0_linear_3941_1324)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.47041 18.3355C14.0133 16.3562 17.0425 15.0514 18.5583 14.421C22.8859 12.6209 23.7852 12.3083 24.3713 12.2979C24.5002 12.2957 24.7884 12.3276 24.9751 12.4791C25.1328 12.607 25.1762 12.7798 25.1969 12.9011C25.2177 13.0224 25.2435 13.2987 25.223 13.5146C24.9885 15.9787 23.9737 21.9584 23.4575 24.7182C23.239 25.886 22.8089 26.2775 22.3925 26.3159C21.4875 26.3991 20.8004 25.7178 19.9239 25.1432C18.5523 24.2442 17.7775 23.6845 16.4462 22.8072C14.9076 21.7933 15.905 21.2361 16.7818 20.3254C17.0113 20.087 20.9985 16.4603 21.0757 16.1313C21.0854 16.0902 21.0943 15.9368 21.0032 15.8558C20.9121 15.7748 20.7776 15.8025 20.6806 15.8246C20.543 15.8558 18.352 17.304 14.1074 20.1691C13.4855 20.5962 12.9222 20.8043 12.4175 20.7934C11.8611 20.7814 10.7908 20.4788 9.9951 20.2201C9.0192 19.9029 8.24356 19.7352 8.3111 19.1964C8.34628 18.9158 8.73272 18.6288 9.47041 18.3355Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3941_1324"
                  x1="17.9998"
                  y1="2.91666"
                  x2="17.9998"
                  y2="33.8522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2AABEE" />
                  <stop offset="1" stopColor="#229ED9" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
      </BannerLayout>
      <CountPart />
      {/* Other Sections */}
      <CustomVideo />
      <TwoSectionLayout />
      <ThumbGallerySlider/>
      <IframeEmbed/>
      
    </main>
  );
}
