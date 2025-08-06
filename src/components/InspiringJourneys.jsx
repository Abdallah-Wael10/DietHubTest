import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function InspiringJourneys() {
const videos = [
    { src: '/assets/Vitrah-obesity-campaign.mp4', poster: '/assets/image.png' },
    { src: '/assets/Vitrah-obesity-campaign.mp4', poster: '/assets/image.png' },
 { src: '/assets/Vitrah-obesity-campaign.mp4', poster: '/assets/image.png' },
    { src: '/assets/Vitrah-obesity-campaign.mp4', poster: '/assets/image.png' },
     { src: '/assets/Vitrah-obesity-campaign.mp4', poster: '/assets/image.png' },
    { src: '/assets/Vitrah-obesity-campaign.mp4', poster: '/assets/image.png' },
  ];

  return (
    <section className="py-12 lg:py-30 w-full">
      <h1 className="font-bold text-lg lg:text-4xl text-center pb-6 lg:pb-15 uppercase">
        Inspiring Journeys
      </h1>

      <section className="w-full lg:px-30">
<Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={16} // matches original spacing
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 16 },   // same spacing as original
    1024: { slidesPerView: 3, spaceBetween: 16 },
  }}
  navigation={{ nextEl: '.next', prevEl: '.prev' }}
  className="!px-4 lg:!px-0 w-full flex justify-center" // center alignment
>
  {videos.map((video, idx) => (
    <SwiperSlide key={idx} className="flex justify-center">
      <VideoCard video={video} />
    </SwiperSlide>
  ))}
</Swiper>


        {/* Navigation Arrows */}
        <div className="w-full flex items-center justify-center pt-6 md:pt-10 xl:pt-10 gap-24">
          <button className="prev rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 xl:size-10" width="40" height="40" fill="none" viewBox="0 0 40 40">
              <path stroke="#FF5003" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8.335 26.667 20 15 31.668" />
            </svg>
          </button>
          <button className="next">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 xl:size-10" width="40" height="40" fill="none" viewBox="0 0 40 40">
              <path stroke="#FF5003" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8.335 26.667 20 15 31.668" />
            </svg>
          </button>
        </div>
      </section>
    </section>
  );
}

function VideoCard({ video }) {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handlePlay = () => {
    const vid = videoRef.current;
    if (vid) {
      setHasPlayed(true);
      vid.controls = true;
      vid.play();
      if (vid.requestFullscreen) {
        vid.requestFullscreen();
      } else if (vid.webkitRequestFullscreen) {
        vid.webkitRequestFullscreen(); // Safari
      } else if (vid.msRequestFullscreen) {
        vid.msRequestFullscreen(); // IE11
      }
    }
  };

  return (
    <div className="relative w-[275px] group hover:cursor-pointer animate-fadeIn transition-transform">
  <video
    ref={videoRef}
    src={video.src}
    poster={video.poster}
    className="w-full h-[496px] object-cover rounded-xl" // fixed height like original
    preload="metadata"
    playsInline
    disablePictureInPicture
    controls={false}
  >
    Your browser does not support HTML5 video.
  </video>
  {!hasPlayed && (
    <button
      onClick={handlePlay}
      className="absolute inset-0 flex items-center justify-center bg-black rounded-xl bg-opacity-20 hover:bg-opacity-0 duration-300 ease-in-out"
      aria-label="Play video"
    >
      <svg
        className="absolute top-2 lg:top-4 right-2 lg:right-4 size-5 xl:size-15 duration-300 ease-in-out"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 54C43.2548 54 54 43.2548 54 30C54 16.7452 43.2548 6 30 6C16.7452 6 6 16.7452 6 30C6 43.2548 16.7452 54 30 54ZM28.6641 21.5039C27.7435 20.8901 26.5599 20.8329 25.5844 21.355C24.609 21.877 24 22.8936 24 24V36C24 37.1064 24.609 38.123 25.5844 38.645C26.5599 39.1671 27.7435 39.1099 28.6641 38.4962L37.6641 32.4962C38.4987 31.9398 39 31.0031 39 30C39 28.9969 38.4987 28.0603 37.6641 27.5039L28.6641 21.5039Z"
          fill="#FF5003"
        />
      </svg>
    </button>
  )}
</div>

  );
}
