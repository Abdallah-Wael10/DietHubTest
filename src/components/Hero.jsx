import Navbar from "./Navbar";

export default function Hero() {
  const StatsData = [
    {
      title: "+2,700",
      description: "Lives Transformed",
      icon: "/assets/transforms.svg",
    },
    {
      title: "94%",
      description: "Success & Satisfaction",
      icon: "/assets/success.svg",
    },
    {
      title: "9.2 KG",
      description: "Average weight loss in a month",
      icon: "/assets/Weigher.svg",
    },
  ];

  return (
    <section className="flex flex-col w-full h-max pb-5 text-white">
      {/* Hero Banner */}
      <div
        className="w-full aspect-[20/11] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('assets/MainBanner.webp')" }}
      >
        <Navbar />
      </div>

      {/* Stats Section */}
      <div className="relative w-full bg-dietBlack py-8 lg:py-16 px-6 lg:px-20">
        <span className="absolute top-0 left-0 right-0 h-[2px] bg-dietOrange"></span>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          {StatsData.map((stat, index) => (
            <div
              key={index}
              className="group w-full md:w-[30%] lg:w-[32%] h-[184px] bg-white rounded-xl flex items-center gap-3 px-6 py-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer"
            >
              {/* Icon Section */}
              <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-dietOrange/10 transition-colors duration-300">
                <img
                  src={stat.icon}
                  alt={stat.description}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-center gap-2">
                <p className="text-3xl lg:text-4xl font-bold text-black group-hover:text-dietOrange transition-colors duration-300">
                  {stat.title}
                </p>
                <p className="text-base lg:text-lg font-medium text-gray-600 leading-tight">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
