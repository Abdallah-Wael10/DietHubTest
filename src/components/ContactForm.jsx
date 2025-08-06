export default function ContactForm() {
  const doctors = [
    {
      name: "Dr. Omar Abdel Hameed",
      role: "Head nutritionist",
      img: "/assets/OmarCard.webp",
      link: "/",
    },
    {
      name: "Dr. Sarah Mustafa",
      role: "Nutritionist Team Leader",
      img: "/assets/SarahCard.webp",
      link: "/",
    },
    {
      name: "Dr. Sherry Montaser",
      role: "Senior Nutritionist",
      img: "/assets/SherryCard.webp",
      link: "/",
    },
    {
      name: "Dr. Mohamed Mustafa",
      role: "Gastroenterology & internal medicine",
      img: "/assets/MohamedCard.webp",
      link: "/",
    },
    {
      name: "Dr. Karim Ashraf",
      role: "Cardiologist",
      img: "/assets/KareemCard.webp",
      link: "/",
    },
  ];

  return (
    <section
      id="doctors"
      className="w-full md:pb-15 lg:pb-20 xl:pb-30 md:px-15 lg:px-20 xl:px-30 grid grid-cols-4 lg:grid-cols-12 gap-4 gap-y-6 lg:gap-8 lg:gap-y-12 justify-center items-center bg-gray-50/50"
    >
      {/* Heading */}
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-4 lg:gap-y-6 gap-x-4 lg:gap-x-8 col-span-full px-6 md:px-0">
        <div className="col-span-full grid grid-cols-4 lg:grid-cols-12 gap-y-4 lg:gap-y-6 gap-x-4 lg:gap-x-8 tracking-wide">
          <div className="col-span-full lg:col-start-3 lg:col-span-8">
            <h4 className="font-[700] text-[36px] uppercase lg:text-4xl text-center w-full text-dietBlack mb-4">
              Meet Our Doctors
            </h4>
          </div>
          <p className="text-[16px] lg:text-lg lg:col-start-3 col-span-full lg:col-span-8 text-center lg:px-1 text-gray-600 leading-relaxed">
            The visionaries behind every successful transformation
          </p>
        </div>

        {/* Orange Line */}
        <div className="flex justify-center col-span-full">
          <span className="rounded-full block h-1 bg-dietOrange w-[29%] "></span>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="col-span-full px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {doctors.map((doc, idx) => (
          <div
            key={idx}
            className="group flex flex-col gap-6 items-center text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="relative">
              <img
                alt={`Doctor ${doc.name}`}
                className="rounded-full w-36 h-36 object-cover ring-4 ring-gray-100 group-hover:ring-dietOrange/20 transition-all duration-300"
                src={doc.img}
                width="144"
                height="144"
              />
              <div className="absolute inset-0 rounded-full bg-dietOrange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="flex flex-col gap-3 flex-grow">
              <div className="space-y-2">
                <h6 className="font-bold text-lg lg:text-xl text-dietBlack group-hover:text-dietOrange transition-colors duration-300">
                  {doc.name}
                </h6>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {doc.role}
                </p>
              </div>

              <a
                href={doc.link}
                className="group/link mt-4 flex items-center justify-center gap-2 text-dietOrange hover:text-dietOrange/80 font-medium transition-all duration-300 ease-in-out py-2"
              >
                <span className="group-hover/link:-translate-x-1 transition-transform duration-300">
                  Show Profile
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Call To Action */}
      <div className="col-span-full flex justify-center">
        <div className="w-full max-w-[843px] h-[220px] text-center bg-gradient-to-br from-dietBlack to-gray-900 text-white rounded-2xl px-8 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
          <div className="space-y-4">
            <h5 className="font-bold text-lg lg:text-xl">
              Want to start your journey?
            </h5>
            <p className="text-sm lg:text-base text-gray-300 leading-relaxed max-w-lg mx-auto">
              Join the countless individuals who have achieved their weight loss
              goals.
            </p>
            <a
              href="/landing"
              className="inline-flex items-center justify-center bg-[rgb(222,80,3)] hover:bg-[rgb(222,80,3)]/60 px-6 py-3 rounded-xl text-white font-semibold text-sm lg:text-base transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg shadow-dietOrange/25"
            >
              Request a call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
