import { useState } from "react";
import { PhoneInput } from "react-international-phone";

export default function Footer() {
  const [phone, setPhone] = useState("");

  return (
    <footer className="py-12 lg:py-15 px-6 md:px-15 lg:px-20 xl:px-30 grid grid-cols-4 lg:grid-cols-12 gap-4 gap-y-12 lg:gap-8 lg:gap-y-15 border-t-[1px] border-dietOrange">
      
      <div className="col-span-full grid grid-cols-4 lg:grid-cols-12 gap-y-10 lg:gap-8 lg:gap-y-2 lg:row-start-1">
        
        {/* Quick Links */}
        <div className="flex flex-col lg:col-span-2 row-start-1 lg:row-start-2 self-end justify-between h-full">
          <a 
            href="/landing" 
            className="text-dietBlack text-sm lg:text-base font-medium opacity-50 hover:opacity-100 hover:text-dietOrange transition-all ease-linear duration-300 whitespace-nowrap block w-fit pb-2"
          >
            Life-Changing Tales
          </a>
          <a 
            href="/terms-and-conditions" 
            className="text-dietBlack text-sm lg:text-base font-medium opacity-50 hover:opacity-100 hover:text-dietOrange transition-all ease-linear duration-300 whitespace-nowrap block w-fit"
          >
            Terms and Conditions
          </a>
        </div>

        {/* Form */}
        <div className="row-start-2 col-span-full lg:col-start-3 lg:col-span-full">
          <form 
            className="grid grid-cols-4 lg:grid-cols-12 gap-4 gap-y-6 lg:gap-y-0 lg:gap-8"
            autoComplete="off"
          >
            <div className="flex flex-col lg:flex-row items-end gap-6 lg:gap-8 w-full col-span-full lg:col-span-10">
              <div className="flex flex-col gap-6 lg:gap-2 w-full items-start">
                <label className="text-xl font-medium text-dietBlack">
                  Request a call
                </label>
                <div className="flex flex-col lg:flex-row w-full justify-between gap-6 lg:gap-8">
                  
                  {/* Full Name */}
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="rounded-lg w-full border border-dietBlack border-opacity-50 px-10 h-11 placeholder:text-sm placeholder:opacity-50 placeholder:text-dietBlack focus:border-dietOrange"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="absolute top-1/2 -translate-y-1/2 size-5 ml-3 stroke-[#6A7181]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>

                  {/* Email */}
                  <div className="relative w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="rounded-lg w-full border border-dietBlack border-opacity-50 px-10 h-11 placeholder:text-sm placeholder:opacity-50 placeholder:text-dietBlack focus:border-dietOrange"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
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

            
{/* Phone */}
<div className="relative w-full">
  <PhoneInput
    defaultCountry="eg"
    value={phone}
    onChange={setPhone}
    placeholder="Phone Number"
    inputClassName="!rounded-r-lg !border !border-l-0 !border-dietBlack !border-opacity-50 !h-11 !w-full px-3 placeholder:text-sm placeholder:opacity-50 placeholder:text-dietBlack focus:!border-dietOrange"
    countrySelectorStyleProps={{
      buttonClassName:
        "!h-11 !border !border-dietBlack !border-opacity-50 !rounded-l-lg !rounded-r-none flex items-center justify-center", // centers the flag
      dropdownArrowClassName: "hidden", // hides dropdown arrow
    }}
  />
</div>



                </div>
              </div>
            </div>

            <button
              type="submit"
              className="col-span-2 self-start lg:self-end flex items-center justify-center bg-dietOrange hover:bg-opacity-60 h-11 rounded-lg text-white text-xs lg:text-base font-medium duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        </div>
        {/* Divider */}
      <span className="bg-dietOrange h-1 col-span-full lg:col-span-8 lg:col-start-3 lg:row-start-2"></span>

      {/* Logo + Text + Social */}
      <div className="col-span-full grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-8 lg:gap-y-5 lg:row-start-3">
        <a href="/" className="col-span-2 row-start-1 block w-fit">
          <img src="/assets/Logo.svg" alt="Diet Hub Logo" width="173" height="37" />
        </a>
        <p className="col-span-full lg:col-span-6 lg:row-start-2 text-center lg:text-start text-xs lg:text-base">
          Meet the new version of yourself at the ultimate wellness hub, where science-backed, non-surgical solutions help you fully control your weight, health, and confidence.
        </p>
        <div className="row-start-1 col-span-2 lg:row-start-2 flex lg:col-span-2 lg:col-start-11 justify-between self-center lg:self-end">
          <a href="https://www.instagram.com/diethubeg/?hl=en" target="_blank">
            <img src="/icons/instagram.svg" alt="Instagram" className="hover:opacity-60 duration-300 size-6" />
          </a>
          <a href="https://www.facebook.com/diethub.ar" target="_blank">
            <img src="/icons/facebook.svg" alt="Facebook" className="hover:opacity-60 duration-300 size-6" />
          </a>
          <a href="https://eg.linkedin.com/company/diet-hub-eg" target="_blank">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="hover:opacity-60 duration-300 size-6" />
          </a>
          <a href="https://www.youtube.com/@diethubeg" target="_blank">
            <img src="/icons/youtube.svg" alt="YouTube" className="hover:opacity-60 duration-300 size-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
