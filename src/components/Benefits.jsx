import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Benefits() {
  const videos = [
    { src: '/assets/Vitrah-obesity-campaign.mp4', poster: '/assets/image.png' },
    { src: '/assets/Vitrah-obesity-campaign.mp4', poster: '/assets/image.png' },
    { src: '/videos/32.mp4', poster: '/videos/posters/32.webp' },
    { src: '/videos/36.mp4', poster: '/videos/posters/36.webp' },
    { src: '/videos/10.mp4', poster: '/videos/posters/10.webp' },
    { src: '/videos/21.mp4', poster: '/videos/posters/21.webp' },
  ];

  return (
    <section className="w-full bg-dietBlack py-12 lg:py-30 flex flex-col gap-6 lg:gap-12 justify-center items-center text-white">
      
      {/* Quote icon */}
      <div className="flex items-center justify-center">
        <img src="/assets/quoteMarks.svg" alt="Quote Marks" width="48" height="34" />
      </div>

      {/* Heading + Paragraph */}
      <div className="grid grid-cols-4 lg:grid-cols-12 px-6 md:px-15 lg:px-20 xl:px-30 gap-y-4 lg:gap-y-6 gap-x-4 lg:gap-x-8">
        <div className="col-span-full grid grid-cols-4 lg:grid-cols-12 gap-y-4 lg:gap-y-6 gap-x-4 lg:gap-x-8 tracking-wide">
          <div className="col-span-full lg:col-start-3 lg:col-span-8">
            <h4 className="font-bold text-xl lg:text-4xl text-center uppercase">
              Transformations That Speak for Themselves
            </h4>
          </div>
          <p className="text-xs lg:text-base lg:col-start-3 col-span-full lg:col-span-8 text-center lg:px-1 opacity-70 text-[#E2E1DF]">
            Join the countless individuals who have achieved their weight loss goals with our protocols.
            Start your journey today and become our next success story
          </p>
        </div>

        {/* Orange line */}
        <div className="col-span-full lg:col-start-3 lg:col-span-8 flex justify-center">
          <span className="rounded-full block h-0.5 lg:h-1 bg-dietOrange w-full"></span>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full md:px-15 lg:px-20 xl:px-30">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ nextEl: '.next', prevEl: '.prev' }}
        >
          {videos.map((video, idx) => {
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
              <SwiperSlide key={idx}>
                <div className="relative w-full group hover:cursor-pointer transition-transform">
                  <video
                    ref={videoRef}
                    src={video.src}
                    poster={video.poster}
                    className="w-full object-contain rounded-xl"
                    preload="metadata"
                    playsInline
                    controls={false}
                  />
                  {!hasPlayed && (
                    <button
                      onClick={handlePlay}
                      className="absolute right-0 top-0 h-full w-full flex items-center justify-center bg-black rounded-xl bg-opacity-20 hover:bg-opacity-0 duration-300 ease-in-out"
                      aria-label="Play video"
                    >
                      <svg
                        className="absolute top-2 lg:top-4 right-2 lg:right-4 size-10"
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
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="w-full flex items-center justify-center pt-6 md:pt-10 xl:pt-10 gap-24">
          <button className="prev rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 xl:size-10" width="40" height="40" fill="none" viewBox="0 0 40 40">
              <path stroke="#FF5003" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8.335 26.667 20 15 31.668"></path>
            </svg>
          </button>
          <button className="next">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6 xl:size-10" width="40" height="40" fill="none" viewBox="0 0 40 40">
              <path stroke="#FF5003" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8.335 26.667 20 15 31.668"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
