export default function Services() {
  return (
    <section className="px-6 md:px-15 lg:px-20 xl:px-30 flex flex-col justify-center items-center gap-6 lg:gap-12 text-dietBlack">
      
      {/* Heading + Description */}
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-4 lg:gap-y-6 gap-x-4 lg:gap-x-8 tracking-wide">
        <div className="col-span-full lg:col-start-3 lg:col-span-8">
          <h4 className="font-bold text-xl lg:text-4xl text-center uppercase">
            How is Diet Hub different in the market?
          </h4>
        </div>
        <p className="text-xs lg:text-base lg:col-start-3 col-span-full lg:col-span-8 text-center lg:px-1 opacity-70">
          Our approach to weight loss is built on sustainable lifestyle changes,
          Expert-led protocols support you during and after the journey to maintain results,
          Personalized guidance enhances your body’s natural function and metabolism,
          there’s no gimmicks, meal replacements, or fake products, just proven methods
          tailored to your individual needs
        </p>
      </div>

      {/* Orange Line */}
<div className="w-full flex justify-center">
  <span className="block h-0.5 lg:h-1 bg-dietOrange rounded-full w-32 lg:w-48"></span>
</div>


      {/* Pillars Grid */}
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-6 lg:gap-8">

        {/* Card 1 */}
        <div className="flex flex-col gap-4 lg:gap-2 col-span-full lg:col-span-6 xl:col-span-3">
          <div className="flex lg:flex-col gap-2 lg:gap-6 items-start">
            <img src="/images/pillars/1.svg" alt="" className="w-9 h-9" />
            <h6 className="font-bold text-sm lg:text-xl lg:min-h-14 capitalize text-center lg:text-left">
              Founded on an established, science-based approach.
            </h6>
          </div>
          <p className="text-xs lg:text-base opacity-70">
            Discover a science-based methodology to reach your ideal weight,
            allowing us to customize your path to success!
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-4 lg:gap-2 col-span-full lg:col-span-6 xl:col-span-3">
          <div className="flex lg:flex-col gap-2 lg:gap-6 items-start">
            <img src="/images/pillars/2.svg" alt="" className="w-9 h-9" />
            <h6 className="font-bold text-sm lg:text-xl lg:min-h-14 capitalize text-center lg:text-left">
              Managed by doctors and healthcare experts.
            </h6>
          </div>
          <p className="text-xs lg:text-base opacity-70">
            No robotic replays, everything is under the medical direction of
            professional physicians to take safe steps toward a healthier you.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-4 lg:gap-2 col-span-full lg:col-span-6 xl:col-span-3">
          <div className="flex lg:flex-col gap-2 lg:gap-6 items-start">
            <img src="/images/pillars/3.svg" alt="" className="w-9 h-9" />
            <h6 className="font-bold text-sm lg:text-xl lg:min-h-14 capitalize text-center lg:text-left">
              Affordable weight loss program options.
            </h6>
          </div>
          <p className="text-xs lg:text-base opacity-70">
            Your goal reaching is our mission. Don't hesitate to take control
            of your weight loss journey. Our affordable options make it achievable.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col gap-4 lg:gap-2 col-span-full lg:col-span-6 xl:col-span-3">
          <div className="flex lg:flex-col gap-2 lg:gap-6 items-start">
            <img src="/images/pillars/4.svg" alt="" className="w-9 h-9" />
            <h6 className="font-bold text-sm lg:text-xl lg:min-h-14 capitalize text-center lg:text-left">
              Experience the full journey online.
            </h6>
          </div>
          <p className="text-xs lg:text-base opacity-70">
            Get top-notch online services with virtual calls and tracking.
            Experience clinic benefits from anywhere.
          </p>
        </div>

      </div>
    </section>
  );
}
