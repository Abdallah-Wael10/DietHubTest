import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";

export default function Benefits() {
  const videos = [
    {
      src: "/assets/Vitrah-obesity-campaign.mp4",
      poster: "/assets/poster1.png",
    },
    {
      src: "/assets/Vitrah-obesity-campaign.mp4",
      poster: "/assets/poster2.png",
    },
    {
      src: "/assets/Vitrah-obesity-campaign.mp4",
      poster: "/assets/poster1.png",
    },
    {
      src: "/assets/Vitrah-obesity-campaign.mp4",
      poster: "/assets/poster2.png",
    },
    {
      src: "/assets/Vitrah-obesity-campaign.mp4",
      poster: "/assets/poster1.png",
    },
    {
      src: "/assets/Vitrah-obesity-campaign.mp4",
      poster: "/assets/poster2.png",
    },
  ];

  return (
    <section className="w-full bg-dietBlack py-16 lg:py-24 flex flex-col gap-8 lg:gap-12 justify-center items-center text-white">
      {/* Header Section */}
      <div className="text-center px-6 lg:px-20 max-w-4xl">
        <div className="flex items-center justify-center mb-6">
          <img
            src="/assets/quoteMarks.svg"
            alt="Quote Marks"
            className="w-12 h-8 lg:w-16 lg:h-12"
          />
        </div>

        <h2 className="font-bold text-2xl lg:text-4xl uppercase mb-4">
          Transformations That Speak for Themselves
        </h2>

        <p className="text-sm lg:text-lg opacity-70 text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
          Join the countless individuals who have achieved their weight loss
          goals with our protocols. Start your journey today and become our next
          success story
        </p>

        <div className="flex justify-center">
          <span className="block h-1 bg-dietOrange rounded-full w-24 lg:w-32"></span>
        </div>
      </div>

      {/* Video Swiper */}
      <div className="w-full px-6 lg:px-20">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
            1024: { slidesPerView: 3, spaceBetween: 24, centeredSlides: false },
          }}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          className="w-full"
        >
          {videos.map((video, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <VideoCard video={video} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="w-full flex items-center justify-center pt-8 lg:pt-12 gap-16">
          <button className="prev-btn group p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 lg:w-8 lg:h-8 rotate-180 text-white group-hover:text-dietOrange transition-colors duration-300"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M15 8.335 26.667 20 15 31.668"
              />
            </svg>
          </button>
          <button className="next-btn group p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 lg:w-8 lg:h-8 text-white group-hover:text-dietOrange transition-colors duration-300"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M15 8.335 26.667 20 15 31.668"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (!document.fullscreenElement && videoRef.current) {
        videoRef.current.pause();
      }
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    document.addEventListener("msfullscreenchange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        onFullscreenChange
      );
      document.removeEventListener("msfullscreenchange", onFullscreenChange);
    };
  }, []);

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
    if (videoRef.current) {
      videoRef.current.controls = isFullscreen;
    }
  }, [isFullscreen]);

  return (
    <div className="group w-full max-w-[405px] mx-auto">
      <div
        ref={containerRef}
        className="relative w-full h-[505px] bg-black rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-dietOrange/20 transition-all duration-300 ease-in-out hover:-translate-y-1 flex items-center justify-center"
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          className={`w-full h-full object-contain bg-black ${
            isFullscreen ? "absolute top-0 left-0 right-0 bottom-0 m-auto" : ""
          }`}
          poster={video.poster}
          preload="metadata"
          onClick={isFullscreen ? handlePlayPause : undefined}
          style={{
            aspectRatio: "405/505",
            maxHeight: isFullscreen ? "100vh" : "100%",
            maxWidth: isFullscreen ? "100vw" : "100%",
            borderRadius: isFullscreen ? "0" : "1rem",
            background: "black",
            display: "block",
            margin: isFullscreen ? "auto" : undefined,
          }}
        >
          <source src={video.src} type="video/mp4" />
        </video>

        {/* Play Button Top Right */}
        {!isFullscreen && (
          <button
            onClick={handleFullscreen}
            className="absolute top-4 right-4 z-10 w-12 h-12 lg:w-16 lg:h-16 bg-dietOrange hover:bg-dietOrange/90 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}

        {/* Gradient Overlay */}
        {!isFullscreen && (
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none group-hover:from-black/50 transition-all duration-300"></div>
        )}
      </div>
    </div>
  );
}
