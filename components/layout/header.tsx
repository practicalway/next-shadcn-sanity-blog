import Link from "next/link";
import { IconBox } from "@tabler/icons-react";
import MobileMenu from "./mobile-menu";
import { ModeToggle } from "../ui/mode-toggle";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="absolute z-30 w-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-1">
            <IconBox />
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex flex-wrap items-center justify-center grow">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="mx-4 text-sm font-medium lg:mx-5"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="items-center justify-end flex-1 hidden md:flex md:grow">
            <li>
              <ModeToggle />
            </li>
          </ul>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
