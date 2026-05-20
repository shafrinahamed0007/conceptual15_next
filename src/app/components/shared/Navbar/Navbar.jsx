import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import logo from "../../../../../public/images/logo.png"; // আপনার অরিজিনাল পাথটি আগের মতোই রাখা হলো
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    /* Liquid Glass (Glassmorphism) Effect */
    <div className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="navbar w-11/12 mx-auto">

        {/* Navbar Start */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-white/20"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* মোবাইল ড্রপডাউন মেনু গ্লাস লুক */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white/70 backdrop-blur-lg rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border border-white/20"
            >
              <NavLinks />
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Image
              src={logo} // আপনার অরিজিনাল ইমপোর্ট করা লোগো ভ্যারিয়েবল
              alt="Logo"
              width={45}
              height={45}
              priority
            />
            <span className="text-xl font-bold tracking-tight text-gray-800">
              AppStore
            </span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-gray-800 font-medium">
            <NavLinks />
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-blue-600/80 hover:bg-blue-600 text-white border border-white/10 backdrop-blur-sm shadow-md gap-2"
          >
            <FaGithub size={18} />
            <span className="hidden sm:inline">Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;