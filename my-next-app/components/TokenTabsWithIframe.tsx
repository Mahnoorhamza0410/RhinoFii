'use client';
import { useState } from 'react';
export default function TokenTabsWithIframe() {
  const [activeTab, setActiveTab] = useState<'buy' | 'chart'>('buy');
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 px-4 py-10 bg-[url('/upper-home.png')] bg-lightgray bg-cover bg-no-repeat bg-blend-multiply pt-[55px] pb-[130px]">
      {/* Tabs */}
      <div className="flex gap-4 p-2 justify-center items-center rounded-full bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] shadow-[inset_1px_1px_10px_rgba(143,108,250,0.6),inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        <button
          onClick={() => setActiveTab('buy')}
          className={`px-6 py-2 text-sm font-semibold transition-all duration-200 rounded-full ${
            activeTab === 'buy'
              ? 'text-white bg-[#8F6CFA] shadow-[1px_1px_2px_rgba(0,0,0,0.15)]'
              : 'text-white/80'
          }`}
        >
          BUY TOKEN
        </button>
        <button
          onClick={() => setActiveTab('chart')}
          className="px-6 py-2 text-sm font-semibold text-white rounded-full"
        >
          VIEWCHART
        </button>
      </div>
      {/* Bridge Text */}
      <div className="text-white text-[14px] font-normal underline w-[350px] px-6 py-2 bg-white/10 text-center rounded-lg ">
        Click to BRIDGE to Pulsechain
      </div>
      {/* Conditionally Render iframe */}
      {activeTab === 'buy' && (
        <div className="flex justify-center w-full">
          <div className="rounded-lg h-[500px] w-[400px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
            <iframe
              src="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?inputCurrency=0x616cb6a245Ed4c11216Ec58D10B6A2E87271845d&amp;outputCurrency=PLS"
              className="w-full h-[600px] border-none"
              allowFullScreen
              title="Pulsex DApp"
            />
          </div>
        </div>
      )}
    </div>
  );
}