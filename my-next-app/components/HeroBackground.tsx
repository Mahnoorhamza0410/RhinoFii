// components/HeroBackground.tsx
export default function HeroBackground() {
    return (
      <div className="relative w-full h-[400px]">
        <img
          src="/images/hero-bg.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
      </div>
    );
  }
  