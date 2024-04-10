"use client";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const mobileNavLinks = [
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
];

const MobileMenu = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [mobileNavOpen]);

  useEffect(() => {
    const body = document.body;
    mobileNavOpen
      ? body.classList.add("overflow-hidden")
      : body.classList.remove("overflow-hidden");
    return () => body.classList.remove("overflow-hidden");
  }, [mobileNavOpen]);

  return (
    <div className="flex items-center ml-4 md:hidden">
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <HamburgerMenuIcon />
      </button>

      <Transition
        show={mobileNavOpen}
        as="nav"
        id="mobile-nav"
        className="absolute left-0 z-20 w-full h-screen bg-black shadow-md top-full"
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 translate-y-10"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-10"
      >
        <div className="flex flex-col h-full">
          <div className="overflow-auto">
            <ul className="px-5 py-2">
              {mobileNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center px-4 py-2 font-medium text-white"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-5 py-4">
            <Link href="/contact-us">
              <Button
                className="w-full"
                type="submit"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default MobileMenu;
