"use client";

import Link from "next/link";
import { navLinks } from "../_lib/constants";
import HeaderMobile from "./HeaderMobile";

function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16 ">
        {navLinks.map((link) => (
          <li key={link.to} className="hidden sm:block">
            <Link
              href={link.to}
              className="hover:text-accent-400 transition-colors no-underline "
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="mx-2 md:hidden">
          <HeaderMobile />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
