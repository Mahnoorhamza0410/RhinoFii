// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/header';
import Footer from '../components/footer';
// import UpperFooterImage from '../components/UpperFooterImage';
import { Poppins } from 'next/font/google';
import { Particles } from "@/components/magicui/particles";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'My App',
  description: 'App with shared layout',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="relative bg-black text-white">
      <div className="fixed inset-0 -z-10">
      {/* <div className="fixed inset-0 -z-10 h-full w-full"> */}
      {/* <Particles className="h-full w-full" /> */}
  <Particles />
</div>
        <Header />
        <main className="">
          {children}</main>
        {/* <UpperFooterImage /> */}
        <Footer />
      </body>
    </html>
  );
}




