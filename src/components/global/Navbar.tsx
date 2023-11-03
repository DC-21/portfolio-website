import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="w-full border-b border-gray-900 fixed top-0 z-50">
      <div className="bg-black relative backdrop-blur-md bg-opacity-70 w-full flex justify-between items-center py-3 px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" className="text-[30px] font-bold">
          Chola
        </Link>

        {/* buttons Desktop */}
        <li className="gap-4 flex list-none items-center">
          <a href="https://www.fiverr.com/users/dcwrld"
            className="text-lg px-2 py-2 bg-white text-black active:scale-95 rounded hover:bg-opacity-70 transition-all"
          >
            Hire Me
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
