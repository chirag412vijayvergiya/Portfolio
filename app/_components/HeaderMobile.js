"use client";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { navLinks } from "../_lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HeaderMobile() {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 right-0 top-[5rem] border-b border-b-white/20 p-5 pt-7 backdrop-blur-md backdrop-filter">
          <ul className="grid gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <li
                  key={link.label}
                  className="w-full rounded-xl bg-gradient-to-tr from-gray-500 via-gray-900 to-gray-800 p-[0.08rem]"
                >
                  <Link
                    href={link.to}
                    onClick={() => setOpen((prev) => !prev)}
                    className={`flex w-full items-center justify-between rounded-xl bg-gray-900 p-5 ${
                      isActive ? "text-red-500" : "text-white"
                    }`}
                  >
                    <span className="flex gap-1 text-lg">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderMobile;
