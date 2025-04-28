import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center pt-20 pb-6 relative">
      {/* Logo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
        />
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#BD58C0] to-[#2CC8D8]"
        >
          <FaFacebookF className="text-black text-xl" />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#BD58C0] to-[#2CC8D8]"
        >
          <FaTwitter className="text-black text-xl" />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#BD58C0] to-[#2CC8D8]"
        >
          <FaInstagram className="text-black text-xl" />
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-sm">
        Copyright ©2025, Solidity Community. All rights reserved.
      </p>
    </footer>
  );
}
