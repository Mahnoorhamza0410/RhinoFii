// components/IframeEmbed.js
import React from 'react';
const IframeEmbed = () => {
  return (
    <div className="w-full h-[500px]">
     <iframe
  src="https://pulsex.mypinata.cloud/ipfs/bafybeiesh56oijasgr7creubue6xt5anivxifrwd5a5argiz4orbed57qi/#/?inputCurrency=0x616cb6a245Ed4c11216Ec58D10B6A2E87271845d&amp;outputCurrency=PLS"
  className="w-full max-w-[960px] min-w-[300px] rounded-lg shadow-lg mx-auto block mb-2"
  style={{
    height: '600px',
    width:'400px',
    border: '0px',
    borderRadius: '8px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 10px',
  }}
  allowFullScreen
  title="Pulsex DApp"
/>
    </div>
  );
};
export default IframeEmbed;






