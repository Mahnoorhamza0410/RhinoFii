'use client';
import React from 'react';
interface DynamicLayoutProps {
  title: string;
  subtitle?: React.ReactNode; // :white_check_mark: Add subtitle prop
  children?: React.ReactNode;
}
const DynamicLayout: React.FC<DynamicLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-[100px] pb-6">
      {/* Heading */}
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ADADAD] font-extrabold text-[40px] sm:text-[60px] text-center">
        {title}
      </h1>
      {/* Paragraph with subtitle if exists */}
      {subtitle && (
        <p className="mt-4 px-4 py-3 rounded-md text-white bg-[#7A61FC]/20 text-center max-w-[834px]">
          {subtitle}
        </p>
      )}
      {/* Content Area */}
      <div className="mt-6 w-full flex justify-center">{children}</div>
    </section>
  );
};
export default DynamicLayout;