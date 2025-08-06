export default function Services() {
  const servicesData = [
    {
      icon: "/assets/firsticon.svg",
      title: "Founded on an established, science-based approach",
      description:
        "Discover a science-based methodology to reach your ideal weight, allowing us to customize your path to success!",
    },
    {
      icon: "/assets/secicon.svg",
      title: "Managed by doctors and healthcare experts",
      description:
        "No robotic replays, everything is under the medical direction of professional physicians to take safe steps toward a healthier you.",
    },
    {
      icon: "/assets/thirdicon.svg",
      title: "Affordable weight loss program options",
      description:
        "Your goal reaching is our mission. Don't hesitate to take control of your weight loss journey. Our affordable options make it achievable.",
    },
    {
      icon: "/assets/fourthicon.svg",
      title: "Experience the full journey online",
      description:
        "Get top-notch online services with virtual calls and tracking. Experience clinic benefits from anywhere.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-20 flex flex-col justify-center items-center gap-12 lg:gap-16 text-dietBlack bg-gray-50/30">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-dietBlack uppercase text-center mx-auto">
          How is Diet Hub different in the market?
        </h2>
        <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our approach to weight loss is built on sustainable lifestyle changes.
          Expert-led protocols support you during and after the journey to
          maintain results. Personalized guidance enhances your body's natural
          function and metabolism— there's no gimmicks, meal replacements, or
          fake products, just proven methods tailored to your individual needs.
        </p>

        {/* Divider */}
        <div className="flex justify-center pt-4">
          <span className="block h-1 bg-dietOrange rounded-full w-24 lg:w-32"></span>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-xl hover:border hover:border-dietOrange/20 transition-all duration-300 ease-in-out hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-dietOrange/10 rounded-full flex items-center justify-center group-hover:bg-dietOrange/20 transition-colors duration-300">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
                <h3 className="font-bold text-lg lg:text-xl text-dietBlack group-hover:text-dietOrange transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
