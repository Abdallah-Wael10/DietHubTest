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
      className="w-full md:pb-15 lg:pb-20 xl:pb-30 md:px-15 lg:px-20 xl:px-30 grid grid-cols-4 lg:grid-cols-12 gap-4 gap-y-6 lg:gap-8 lg:gap-y-12 justify-center items-center"
    >
      {/* Heading */}
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-4 lg:gap-y-6 gap-x-4 lg:gap-x-8 col-span-full px-6 md:px-0">
        <div className="col-span-full grid grid-cols-4 lg:grid-cols-12 gap-y-4 lg:gap-y-6 gap-x-4 lg:gap-x-8 tracking-wide">
          <div className="col-span-full lg:col-start-3 lg:col-span-8">
            <h4 className="font-bold text-xl lg:text-4xl text-center w-full uppercase text-dietBlack">
              Meet Our Doctors
            </h4>
          </div>
          <p className="text-xs lg:text-base lg:col-start-3 col-span-full lg:col-span-8 text-center lg:px-1 opacity-70 text-dietBlack">
            The visionaries behind every successful transformation
          </p>
        </div>

        {/* Orange Line */}
        <span className="rounded-full block lg:!col-start-5 col-span-4 h-0.5 lg:h-1 bg-dietOrange"></span>
      </div>

      {/* Doctors Grid */}
      <div className="col-span-full px-6 lg:px-0 grid grid-cols-4 lg:grid-cols-12 gap-4 gap-y-12 lg:gap-8">
        {doctors.map((doc, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-4 items-center text-center col-span-2 lg:col-span-4"
          >
            <img
              alt={`Doctor ${doc.name}`}
              className="rounded-full size-36"
              src={doc.img}
              width="112"
              height="112"
            />
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1 lg:px-8">
                <h6 className="font-bold text-base lg:text-xl">{doc.name}</h6>
                <p className="text-xs lg:text-base lg:px-1.5 opacity-70 text-center">
                  {doc.role}
                </p>
              </div>
              <a
                href={doc.link}
                className="flex items-center justify-center group hover:bg-opacity-60 h-8 lg:h-10 rounded-lg py-2.5 text-center text-white text-sm lg:text-base font-medium col-span-2 duration-300 ease-in-out"
              >
                <p className="text-dietOrange group-hover:lg:-translate-x-2 duration-300 ease-in-out pl-2 lg:pl-0">
                  Show Profile
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-dietOrange size-7 group-hover:lg:translate-x-2 duration-300 ease-in-out pr-1 lg:pr-0"
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
      <div className="col-span-full lg:col-span-8 lg:col-start-3 text-center grid grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8 lg:gap-y-6 items-center justify-center bg-dietBlack text-white md:rounded-xl py-12 lg:py-10 px-6">
        <p className="font-bold text-lg lg:text-xl col-span-full uppercase">
          Want to start your journey?
        </p>
        <p className="text-xs lg:text-base text-opacity-70 col-span-full">
          Join the countless individuals who have achieved their weight loss goals.
        </p>
        <a
          href="/landing"
          className="flex items-center justify-center bg-dietOrange hover:bg-opacity-60 h-10 rounded-lg py-2.5 text-center text-white col-span-2 lg:col-span-3 xl:col-span-2 duration-300 ease-in-out text-xs lg:text-sm xl:text-base font-medium col-start-2 lg:!col-start-3 2xl:!col-start-4 lg:!col-span-4 2xl:!col-span-2"
        >
          Request a call now
        </a>
      </div>
    </section>
  );
}
