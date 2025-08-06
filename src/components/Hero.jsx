export default function Hero() {
  return (
    <section className="flex flex-col w-full h-full lg:min-h-screen text-white">
      
      {/* Hero Banner */}
      <div
        className="h-[70svh] lg:min-h-screen bg-cover bg-center bg-no-repeat pt-24 relative"
        style={{ backgroundImage: "url('assets/MainBanner.webp')" }}
      >
        <div className="text-center text-white sm:hidden h-full flex flex-col gap-3 lg:gap-0 items-center w-full px-6 relative inset-y-10 md:inset-y-0">
          <h1 className="font-bold text-2xl xl:text-6xl xl:leading-[70px]">
            LIVE IN YOUR DREAM BODY
          </h1>
          <p className="lg:max-w-[50%] text-xs lg:text-xl opacity-70">
            Meet the new version of yourself at the ultimate wellness hub, where
            science-backed, non-surgical solutions help you fully control your
            weight, health, and confidence.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative h-[30svh] md:h-full w-full bg-dietBlack py-6 lg:py-15 px-6 md:px-15 lg:px-20 xl:px-30 grid grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-8">
        <span className="absolute top-0 left-0 right-0 h-[1px] lg:h-1 bg-dietOrange rounded-full"></span>

        {/* Card 1 */}
        <div className="w-full flex flex-col justify-center gap-2 py-3 lg:py-9 px-2 lg:px-6 bg-white col-span-2 lg:col-span-4 items-center rounded-xl text-dietBlack">
          <img alt="Lives Transformed icon" className="w-12 h-12" src="/assets/transforms.svg" />
          <div className="flex flex-col items-center gap-1 lg:gap-2">
            <p className="text-lg lg:text-4xl font-bold">+2,700</p>
            <p className="text-xs lg:text-xl font-medium opacity-70 text-center">
              Lives Transformed
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full flex flex-col justify-center gap-2 py-3 lg:py-9 px-2 lg:px-6 bg-white col-span-2 lg:col-span-4 items-center rounded-xl text-dietBlack">
          <img alt="Success & Satisfaction icon" className="w-12 h-12" src="/assets/success.svg" />
          <div className="flex flex-col items-center gap-1 lg:gap-2">
            <p className="text-lg lg:text-4xl font-bold">94%</p>
            <p className="text-xs lg:text-xl font-medium opacity-70 text-center">
              Success & Satisfaction
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full flex flex-col justify-center gap-2 py-3 lg:py-9 px-2 lg:px-6 bg-white col-span-2 lg:col-span-4 items-center rounded-xl text-dietBlack">
          <img alt="Average weight loss in a month icon" className="w-12 h-12" src="/assets/Weigher.svg" />
          <div className="flex flex-col items-center gap-1 lg:gap-2">
            <p className="text-lg lg:text-4xl font-bold">9.2 KG</p>
            <p className="text-xs lg:text-xl font-medium opacity-70 text-center">
              Average weight loss in a month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
