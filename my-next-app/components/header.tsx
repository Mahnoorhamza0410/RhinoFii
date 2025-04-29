'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5'; // Only Close icon
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Fixed header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#323334]/20 text-white h-[72px] flex items-center justify-between px-6">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center w-full gap-10 relative">
          <Link href="/" className="text-[16px] px-4 font-bold">BUY RHINO</Link>
          <div className="flex-shrink-0 px-4">
            <Link href="/">
              <Image src="/Rhino-logo.png" alt="Rhino-logo" width={180} height={60} className="cursor-pointer" />
            </Link>
          </div>
          <Link href="/pool" className="text-[16px] px-4 font-bold">LIQUIDITY POOLS</Link>
          {/* Desktop Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-[200px] z-50"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <IoClose size={28} />
            ) : (
              <Image src="icons/menu-icon.svg" alt="Menu Icon" width={28} height={28} />
            )}
          </button>
        </div>
        {/* Mobile Logo */}
        <div className="flex justify-center w-full lg:hidden">
        <Link href="/">
          <Image src="/Rhino-logo.png" alt="Logo" width={180} height={60} />
          </Link>
        </div>
        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden absolute right-6 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Mobile Menu"
        >
          {menuOpen ? (
            <IoClose size={28} />
          ) : (
            <Image src="/icons/menu-icon.svg" alt="Menu Icon" width={28} height={28} />
          )}
        </button>
      </header>
      {/* Sidebar Mobile Menu with Overlay (non-blocking) */}
      {menuOpen && (
        <>
          {/* Transparent overlay */}
          <div
            className="fixed inset-0 z-30 pointer-events-none"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          />
          {/* Sidebar panel */}
          <div
            className="fixed right-0 top-0 h-full w-[250px] bg-[#323334]/80 text-white pt-[200px] px-6 pb-10 flex flex-col gap-6 shadow-lg backdrop-blur-md z-40"
          >
            <Link href="/leaderboard" onClick={() => setMenuOpen(false)} className="whitespace-nowrap">LeaderBoard</Link>
            <Link href="/whitepaper" onClick={() => setMenuOpen(false)}>WhitePaper</Link>
            <Link href="/pool" onClick={() => setMenuOpen(false)}>Liquidity Pool</Link>
          </div>
        </>
      )}
    </>
  );
}