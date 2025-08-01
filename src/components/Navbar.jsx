import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" className="h-10" />

        <ul className="hidden md:flex gap-7 text-white">
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400 transition">Home</a></li>
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400 transition">About</a></li>
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400 transition">Project</a></li>
          <li><a href="#Header" className="cursor-pointer hover:text-gray-400 transition">Testimonials</a></li>
        </ul>

        <button className="hidden md:block bg-white text-black px-8 py-2 rounded-full cursor-pointer hover:bg-gray-400 transition">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
