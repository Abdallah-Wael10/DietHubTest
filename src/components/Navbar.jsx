export default function Navbar() {
  return (
       <nav className="w-full z-20 px-6 lg:px-20 py-3 absolute top-0 grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-4 items-center">
      <div className="col-span-2">
        <a href="/">
          <img alt="Diet Hub logo" className="w-36" src="public/assets/Logo.svg" />
        </a>
      </div>
      <ul className="hidden md:flex md:col-start-4 xl:col-start-7 md:col-span-4 justify-between text-white font-medium">
        <li><a href="/about" className="hover:text-dietOrange">About Us</a></li>
        <li><a href="/#doctors" className="hover:text-dietOrange">Our Doctors</a></li>
        <li><a href="/services" className="hover:text-dietOrange">Services</a></li>
        <li><a href="/blogs" className="hover:text-dietOrange">Blogs</a></li>
      </ul>
      
     <a class="flex items-center justify-center bg-dietOrange hover:bg-opacity-60 h-10 rounded-lg py-2.5 text-center text-white col-span-2 lg:col-span-3 xl:col-span-2 duration-300 ease-in-out text-xs lg:text-sm xl:text-base font-medium hidden md:flex text-sm lg:text-base font-medium duration-300 ease-in-out text-dietBlack md:col-start-7 lg:col-start-7 lg:col-end-9 xl:col-start-11  whitespace-nowrap" href="/landing" data-discover="true">Life-Changing Tales</a>
    </nav>
  );
}



