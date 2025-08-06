import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function LandingForm() {
  const [phone, setPhone] = useState("");

  return (
    <section className="bg-dietBlack py-12 pt-20 lg:py-30 lg:pt-56 w-full text-white">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 gap-y-6 lg:gap-8 lg:gap-y-10 px-6 md:px-15 lg:px-20 xl:px-30">

        {/* Title */}
        <div className="col-span-full text-center row-start-1 lg:col-start-1 lg:col-span-6 lg:self-end">
          <h2 className="font-bold text-lg lg:text-4xl lg:pb-4 uppercase">
            Tell Your New Story Now!
          </h2>
          <p className="text-sm lg:text-xl opacity-70">
            Take a seat and start your transformation journey with us
          </p>
        </div>

        {/* Form */}
        <div className="col-span-full lg:col-span-6 text-center self-center lg:col-start-1 lg:row-start-2 lg:self-start">
          <form className="flex flex-col items-center lg:gap-5" autoComplete="off">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 justify-between w-full">
              {/* Name */}
              <div className="relative w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="rounded-lg w-full border-2 px-10 h-11 placeholder:text-sm duration-300 focus:border-dietOrange outline-none text-black"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute top-1/2 -translate-y-1/2 size-5 ml-3 text-[#808080]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>

              {/* Phone */}
              <div className="w-full">
                <PhoneInput
                  defaultCountry="eg"
                  value={phone}
                  onChange={setPhone}
                  inputClassName="w-full h-11 rounded-lg border-2 px-4 placeholder:text-sm focus:border-dietOrange outline-none text-black"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 justify-between w-full">
              {/* Email */}
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="rounded-lg w-full border-2 px-10 h-11 placeholder:text-sm duration-300 focus:border-dietOrange outline-none text-black"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="absolute top-1/2 -translate-y-1/2 size-5 ml-3 stroke-[#6A7181]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>

              {/* Weight */}
              <div className="relative w-full">
                <input
                  type="text"
                  name="weight"
                  placeholder="Weight (Kg)"
                  className="rounded-lg w-full border-2 px-10 h-11 placeholder:text-sm duration-300 focus:border-dietOrange outline-none text-black"
                />
                <img
                  src="/images/weight.svg"
                  alt="Weight"
                  className="absolute top-1/2 -translate-y-1/2 size-5 ml-3"
                />
              </div>
            </div>

            <div className="w-full relative">
              {/* Height */}
              <input
                type="text"
                name="height"
                placeholder="Height (cm)"
                className="rounded-lg w-full border-2 px-10 h-11 placeholder:text-sm duration-300 focus:border-dietOrange outline-none text-black"
              />
              <img
                src="/images/height.svg"
                alt="Height"
                className="absolute top-1/2 -translate-y-1/2 size-5 ml-3"
              />
            </div>

            {/* Buttons */}
            <div className="flex pt-5 lg:pt-0 gap-4 lg:gap-8 justify-center items-center w-full">
              <button
                type="submit"
                className="w-full lg:w-1/3 flex items-center justify-center bg-dietOrange hover:bg-opacity-60 h-11 rounded-lg text-white text-xs lg:text-base font-medium duration-300"
              >
                Submit
              </button>
              <a
                href="/"
                className="w-full lg:w-1/3 flex items-center justify-center border-2 border-dietOrange rounded-lg text-white text-xs lg:text-base font-medium duration-300 group"
              >
                <p className="text-dietOrange group-hover:-translate-x-2 duration-300">
                  Discover More
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-dietOrange size-7 group-hover:translate-x-2 duration-300"
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

        {/* Right Image */}
        {/* Right side: Swiper (images) */}
<div className="col-span-full lg:col-span-6 lg:col-start-7 row-start-2 lg:row-start-1 lg:row-span-2">
  <Swiper
    modules={[Autoplay]}
    spaceBetween={10}
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    className="rounded-lg"
  >
    <SwiperSlide>
      <img
        src="/images/landing/1.webp"
        alt="Slide 1"
        className="w-full h-full object-cover rounded-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="/assets/SarahCard.webp"
        alt="Slide 2"
        className="w-full h-full object-cover rounded-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="/assets/SarahCard.webp"
        alt="Slide 3"
        className="w-full h-full object-cover rounded-lg"
      />
    </SwiperSlide>
  </Swiper>
</div>

      </div>
    </section>
  );
}
