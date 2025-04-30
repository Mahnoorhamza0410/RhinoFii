'use client';
import React from 'react';
interface DynamicLayoutProps {
  title: string;
  subtitle?: React.ReactNode; // :white_check_mark: Add subtitle prop
  children?: React.ReactNode;
}
const DynamicLayout: React.FC<DynamicLayoutProps> = ({ title, subtitle, children }) => {
  return (
    // <section className="flex flex-col items-center justify-center px-4 pt-[100px] pb-6"> padding was 100px now i change in 0px
     <section className="flex flex-col items-center justify-center px-4 pt-[0px] pb-6"> 
      {/* Heading */}
      <h1 className="text-transparent bg-clip-text bg-[linear-gradient(194deg,#FFF_22.29%,#ADADAD_76.59%)] font-extrabold text-[36px] sm:text-[60px] text-center">
      {title}
      </h1>
      {/* Paragraph with subtitle if exists */}
      {subtitle && (
        <p className="mt-4 rounded-md text-white bg-[#7A61FC]/20 text-center max-w-[893px] sm:h-[62px] h-[auto] py-[14.5px] px-[40px] sm:px-[120px] text-[18px] sm:text-[24px] font-normal">
          {subtitle}
        </p>
      )}
      {/* Content Area */}
      <div className="mt-6 w-full flex justify-center">{children}</div>
    </section>
  );
};
export default DynamicLayout;

// 'use client';
// import React from 'react';

// interface DynamicLayoutProps {
//   title: string;
//   subtitle?: React.ReactNode;
//   children?: React.ReactNode;
// }

// const DynamicLayout: React.FC<DynamicLayoutProps> = ({ title, subtitle, children }) => {
//   return (
//     // Changed pt-[100px] to pt-[0px] ✅
//     <section className="flex flex-col items-center justify-center px-4 pt-[0px] pb-6">
      
//       {/* Heading */}
//       <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ADADAD] font-extrabold text-[36px] sm:text-[60px] text-center">
//         {title}
//       </h1>

//       {/* Paragraph with subtitle if exists */}
//       {subtitle && (
//         <p 
//           className={`py-3 rounded-md text-center max-w-[834px] 
//         `
//           }
//         >
//           {subtitle}
//         </p>
//       )}

//       {/* Content Area */}
//       <div className="mt-6 w-full flex justify-center">
//         {children}
//       </div>
//     </section>
//   );
// };

// export default DynamicLayout;
