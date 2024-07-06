import Link from "next/link";
import { navLinks } from "../_lib/constants";

function Navigation() {
  return (
    <nav className="z-10 text-xl ">
      <ul className="flex items-center gap-16">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              href={link.to}
              className="hover:text-accent-400 transition-colors no-underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
