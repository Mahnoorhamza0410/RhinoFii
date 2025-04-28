import Image from 'next/image';

export default function UpperFooterImage() {
  return (
    <div className="w-full h-[261px] relative">
      <Image
        src="/upper-footer.png" // ⬅️ Put your image inside /public folder with this name
        alt="Upper Footer Background"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
