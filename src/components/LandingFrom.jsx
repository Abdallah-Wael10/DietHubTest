import { useState } from "react";

// test
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./Navbar";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import First from "../../public/assets/first";
import second from "../../public/assets/second";
import third from "../../public/assets/third";

export default function LandingForm() {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    weight: "",
    height: "",
  });

  const ImagesBeforeAndAfter = [First, second, third];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-dietBlack text-white w-full min-h-screen max-[1025px]:min-h-0 max-[1025px]:pb-10">
      <Navbar />
      <div className="w-full h-max min-h-screen  max-[1025px]:min-h-0 max-[1025px]:pb-10 flex justify-center items-center flex-wrap">
        <div className="w-1/2 h-max pb-5 flex justify-center items-center max-[900px]:w-full max-[1025px]:w-[80%]">
          <form className="w-[100%] h-max pb-5 pl-32  pt-5 rounded-lg bg-transparent flex flex-col justify-center max-[1025px]:pl-2   ">
            <h1 className="w-full text-[36px] font-bold text-white text-center mb-3 leading-tight tracking-tight max-[600px]:text-[25px]">
              TELL YOUR NEW STORY NOW!
            </h1>
            <h2 className="w-full text-[20px] font-medium text-white/80 text-center mb-10 leading-relaxed max-[600px]:text-[13px]">
              Take a seat and start your transformation journey with us
            </h2>

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5 max-[900px]:flex max-[900px]:justify-center max-[900px]:items-center max-[900px]:flex-wrap">
              <div className="w-[90%] relative group max-[900px]:w-[70%]">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full h-[45px] pl-12 pr-4 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder:text-gray-400 text-base font-medium focus:border-[rgb(255_80_3)] focus:outline-none focus:ring-2 focus:ring-[rgb(255_80_3)]/20 transition-all duration-300 hover:border-gray-400 hover:shadow-md group-hover:shadow-lg"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[rgb(255_80_3)] transition-colors duration-300 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>

              <div className="w-[90%] relative group max-[900px]:w-[70%]">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  className="w-full h-[45px] pl-12 pr-4 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder:text-gray-400 text-base font-medium focus:border-[rgb(255_80_3)] focus:outline-none focus:ring-2 focus:ring-[rgb(255_80_3)]/20 transition-all duration-300 hover:border-gray-400 hover:shadow-md group-hover:shadow-lg"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[rgb(255_80_3)] transition-colors duration-300 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
            </div>

            {/* Phone & Weight/Height Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 max-[900px]:flex max-[900px]:justify-center max-[900px]:items-center max-[900px]:flex-col">
              {/* Phone Input */}
              <div className="w-[90%] relative group max-[900px]:w-[70%]">
                <PhoneInput
                  defaultCountry="eg"
                  value={phone}
                  onChange={setPhone}
                  placeholder="Phone Number"
                  inputClassName="!rounded-r-lg !border !border-l-0 !border-gray-300 !h-[45px] !w-full px-3 placeholder:text-gray-400 focus:!border-[rgb(255_80_3)] focus:!ring-2 focus:!ring-[rgb(255_80_3)]/20 hover:!border-gray-400 !text-base !font-medium !bg-white !text-gray-800 !transition-all !duration-300"
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!h-[45px] !border !border-gray-300 !rounded-l-lg !p-2 !rounded-r-none focus:!border-[rgb(255_80_3)] hover:!border-gray-400 !bg-white !transition-all !duration-300",
                    dropdownArrowClassName: "hidden",
                  }}
                />
              </div>

              {/* Weight & Height */}
              <div className="w-[90%] grid grid-cols-2 gap-2 max-[900px]:w-[70%]">
                <div className=" relative group">
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    placeholder="Weight (Kg)"
                    className="w-full h-[45px] pl-12 pr-4 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder:text-gray-400 text-base font-medium focus:border-[rgb(255_80_3)] focus:outline-none focus:ring-2 focus:ring-[rgb(255_80_3)]/20 transition-all duration-300 hover:border-gray-400 hover:shadow-md group-hover:shadow-lg"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[rgb(255_80_3)] transition-colors duration-300 pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75"
                    />
                  </svg>
                </div>

                <div className=" relative group">
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    placeholder="Height (cm)"
                    className="w-full h-[45px] pl-12 pr-4 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder:text-gray-400 text-base font-medium focus:border-[rgb(255_80_3)] focus:outline-none focus:ring-2 focus:ring-[rgb(255_80_3)]/20 transition-all duration-300 hover:border-gray-400 hover:shadow-md group-hover:shadow-lg"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[rgb(255_80_3)] transition-colors duration-300 pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full h-max pb-5 flex justify-center items-center gap-6 mt-6 max-[900px]:flex-wrap">
              <button
                type="submit"
                className="w-[30%] h-[40px] bg-[rgb(222,80,3)] hover:bg-[rgb(222,80,3)]/60 text-white font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] hover:shadow-[rgb(255_80_3)]/30 max-[900px]:w-[70%]"
              >
                Submit
              </button>
              <a
                href="/"
                className="w-[30%] h-[40px] flex items-center justify-center gap-2 border-2 border-[rgb(255_80_3)] text-[rgb(255_80_3)] hover:bg-[rgb(255_80_3)] hover:text-white rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] group max-[900px]:w-[70%]"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">
                  Discover More
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </form>
        </div>

        <div className="w-1/2 h-max pb-5 flex justify-center items-center max-[900px]:w-full max-[900px]:pb-0 max-[1025px]:w-[100%]">
          <div
            className="
      w-[80%] h-[500px] bg-white rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden border border-gray-100
      max-[900px]:w-[80%] max-[900px]:h-[320px] max-[600px]:h-[220px] max-[900px]:rounded-xl max-[900px]:shadow-lg max-[900px]:border
    "
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="w-full h-full rounded-2xl max-[900px]:rounded-xl"
            >
              {ImagesBeforeAndAfter.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={image}
                    alt={`Transformation ${idx + 1}`}
                    className="
              w-full h-full object-cover transition-transform duration-500 hover:scale-105
              max-[900px]:object-contain max-[900px]:rounded-xl
            "
                    loading="eager"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Floating Labels */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg text-[rgb(255_80_3)] font-bold text-sm border border-[rgb(255_80_3)]/20 max-[900px]:top-2 max-[900px]:left-2 max-[900px]:px-3 max-[900px]:py-1 max-[900px]:text-xs">
              Before
            </div>
            <div className="absolute top-6 right-6 bg-[rgb(255_80_3)]/95 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg text-white font-bold text-sm max-[900px]:top-2 max-[900px]:right-2 max-[900px]:px-3 max-[900px]:py-1 max-[900px]:text-xs">
              After
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 max-[900px]:bottom-2 max-[900px]:space-x-2">
              {ImagesBeforeAndAfter.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-white/70 rounded-full hover:bg-[rgb(255_80_3)] transition-colors duration-300 cursor-pointer max-[900px]:w-1.5 max-[900px]:h-1.5"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
