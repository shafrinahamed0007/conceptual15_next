import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import logo from "../../../../../public/images/logo.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="bg-blue-100">
      <div className="navbar w-11/12 mx-auto shadow-sm">

        {/* Navbar Start */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Logo"
              width={45}
              height={45}
            />
            <span className="text-xl font-bold">
              AppStore
            </span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <NavLinks />
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <a
            href="https://github.com"
            target="_blank"
            className="btn bg-blue-500 text-white hover:bg-blue-600 border-none"
          >
            <FaGithub size={18} />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;