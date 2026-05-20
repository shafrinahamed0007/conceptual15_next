"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Apps",
      path: "/apps",
    },
    {
      name: "Install Apps",
      path: "/installapps",
    },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link
            href={link.path}
            className={`${
              pathname === link.path
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-200"
            } rounded-lg transition-all duration-300`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
