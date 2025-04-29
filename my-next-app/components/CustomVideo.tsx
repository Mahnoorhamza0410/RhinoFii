// 'use client';
// import React from 'react';
// import Video from 'next-video';
// import Awesom from '/videos/awesom-video.mp4';
// export default function CustomVideo() {
//   return (
//     <div className="w-full max-w-4xl mx-auto my-8">
//       <video
//         src="/awesom-video.mp4"
//         controls
//         autoPlay
//         className="w-full rounded-xl shadow-lg"
//       >
//         Your browser does not support the video tag.
//       </video>
//       <Video src={Awesom}></Video>
//     </div>
//   );
// }
// components/CustomVideo.tsx
// 'use client';
// import React from 'react';

'use client';
import { useRef, useState, useEffect } from 'react';
export default function CustomVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handlePlay = () => setIsPaused(false);
    const handlePause = () => setIsPaused(true);
    const handleEnded = () => setIsPaused(true);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);
  return (
    <div className="w-full px-5 sm:px-0 max-w-4xl mx-auto my-10 relative sm:pt-[100px] pt-[50px]">
      {/* Video Element */}
      <video
        ref={videoRef}
        controls
        playsInline
        muted={false}
        className="w-full rounded-lg shadow-lg"
      >
        <source src="/video/awesom-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Play Icon Button when paused or ended */}
      {isPaused && (
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <img
            src="/icons/media-player.png"
            alt="Play"
            className="w-16 h-16 opacity-80 hover:opacity-100"
          />
        </button>
      )}
    </div>
  );
}





// // components/CustomVideo.tsx
// export default function CustomVideo() {
//   return (
//     <video
//       className="w-full h-screen object-cover"
//       autoPlay
//       muted
//       loop
//       playsInline
//     >
//       <source src="/video/awesom-video.mp4" type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   );
// }

