import { useState } from "react";
import { PhoneInput } from "react-international-phone";

export default function Footer() {
  const [phone, setPhone] = useState("");

  return (
    <footer className="w-full h-max pb-10 pt-5 bg-white max-[900px]:pb-[290px] max-[900px]:pt-6 max-[900px]:px-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-[900px]:gap-5">
          {/* Quick Links */}
          <div className="lg:col-span-2 max-[900px]:order-2 max-[900px]:mb-4">
            <div className="space-y-4 pt-[31px] flex gap-2 flex-col max-[900px]:pt-0 max-[900px]:items-center">
              <a
                href="/landing"
                className="block text-[rgb(28_28_28_/_var(--tw-text-opacity))] text-opacity-70 hover:text-opacity-100 hover:text-[rgb(255_80_3)] transition-all duration-300 text-sm lg:text-base font-medium max-[900px]:text-base max-[900px]:text-center"
              >
                Life-Changing Tales
              </a>
              <a
                href="/terms-and-conditions"
                className="block text-[rgb(28_28_28_/_var(--tw-text-opacity))] text-opacity-70 hover:text-opacity-100 hover:text-[rgb(255_80_3)] transition-all duration-300 text-sm lg:text-base font-medium max-[900px]:text-base max-[900px]:text-center"
              >
                Terms and Conditions
              </a>
            </div>
          </div>

          {/* Request a Call Form */}
          <div className="lg:col-span-10 max-[900px]:order-1">
            <h3 className="w-full h-max text-start font-semibold text-[rgb(28_28_28)] text-xl mb-6 max-[900px]:text-center max-[900px]:text-lg max-[900px]:mb-4">
              Request a call
            </h3>
            <div className="flex flex-col lg:flex-row gap-4 items-end max-[900px]:gap-3 max-[900px]:justify-center max-[900px]:items-center">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 max-[900px]:grid-cols-1 max-[900px]:gap-3">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full h-12 px-4 pl-12 rounded-lg border border-gray-300 focus:border-[rgb(255_80_3)] focus:outline-none transition-all duration-300 placeholder:text-[rgb(28_28_28_/_var(--tw-text-opacity))] placeholder:text-opacity-50 text-sm"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-[rgb(28_28_28_/_var(--tw-text-opacity))] text-opacity-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="w-full h-12 px-4 pl-12 rounded-lg border border-gray-300 focus:border-[rgb(255_80_3)] focus:outline-none transition-all duration-300 placeholder:text-[rgb(28_28_28_/_var(--tw-text-opacity))] placeholder:text-opacity-50 text-sm"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-[rgb(28_28_28_/_var(--tw-text-opacity))] text-opacity-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="relative">
                  <PhoneInput
                    defaultCountry="eg"
                    value={phone}
                    onChange={setPhone}
                    placeholder="Phone Number"
                    inputClassName="!rounded-r-lg !border !border-l-0 !border-gray-300 !h-12 !w-full px-3 placeholder:text-[rgb(28_28_28_/_var(--tw-text-opacity))] placeholder:text-opacity-50 focus:!border-[rgb(255_80_3)] !text-sm"
                    countrySelectorStyleProps={{
                      buttonClassName:
                        "!h-12 !border !border-gray-300 !rounded-l-lg !rounded-r-none focus:!border-[rgb(255_80_3)]",
                      dropdownArrowClassName: "hidden",
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[rgb(255_80_3)] hover:bg-opacity-90 text-white px-8 py-3 h-12 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap text-sm lg:text-base max-[900px]:w-full max-[900px]:mt-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[rgb(255_80_3)] my-10 lg:my-12 max-[900px]:my-6"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-[900px]:gap-5 max-[900px]:text-center">
          <div className="lg:col-span-3 max-[900px]:mb-3">
            <a href="/" className="block w-fit max-[900px]:mx-auto">
              <img
                src="/assets/Logo.svg"
                alt="Diet Hub Logo"
                width="173"
                height="37"
                className="h-8 lg:h-10 w-auto"
              />
            </a>
          </div>
          <div className="lg:col-span-6 max-[900px]:mb-3">
            <p className="text-[rgb(28_28_28_/_var(--tw-text-opacity))] text-opacity-70 text-sm lg:text-base leading-relaxed text-center lg:text-left max-[900px]:text-center max-[900px]:text-sm max-[900px]:leading-6">
              Meet the new version of yourself at the ultimate wellness hub,
              where science-backed, non-surgical solutions help you fully
              control your weight, health, and confidence
            </p>
          </div>
          <div className="lg:col-span-3 flex justify-center lg:justify-end space-x-3 max-[900px]:justify-center max-[900px]:space-x-4">
            <a
              href="https://www.instagram.com/diethubeg/?hl=en"
              target="_blank"
              className="w-9 h-9 bg-[rgb(255_80_3)] hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg max-[900px]:w-10 max-[900px]:h-10"
            >
              <svg
                className="w-4 h-4 text-white max-[900px]:w-5 max-[900px]:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/diethub.ar"
              target="_blank"
              className="w-9 h-9 bg-[rgb(255_80_3)] hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg max-[900px]:w-10 max-[900px]:h-10"
            >
              <svg
                className="w-4 h-4 text-white max-[900px]:w-5 max-[900px]:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://eg.linkedin.com/company/diet-hub-eg"
              target="_blank"
              className="w-9 h-9 bg-[rgb(255_80_3)] hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg max-[900px]:w-10 max-[900px]:h-10"
            >
              <svg
                className="w-4 h-4 text-white max-[900px]:w-5 max-[900px]:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@diethubeg"
              target="_blank"
              className="w-9 h-9 bg-[rgb(255_80_3)] hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg max-[900px]:w-10 max-[900px]:h-10"
            >
              <svg
                className="w-4 h-4 text-white max-[900px]:w-5 max-[900px]:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
