import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  IconBox,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const footerGroups = [
  {
    label: "Pages",
    links: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
    ],
  },
  {
    label: "Contact",
    links: [{ label: "GitHub", href: "https://github.com/kaganmert" }],
  },
  {
    label: "Other",
    links: [{ label: "GitHub", href: "https://github.com/kaganmert" }],
  },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com",
    icon: <IconBrandX />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: <IconBrandInstagram />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: <IconBrandLinkedin />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: <IconBrandFacebook />,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative">
      <div className="absolute inset-0 -z-10" aria-hidden="true" />
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="grid gap-8 py-8 border-t sm:grid-cols-12 lg:grid-cols-10 border-slate-700">
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            <Link href="/">
              <IconBox />
              <div className="mb-4 text-sm">
                <div className="mt-2 text-xl">{siteConfig.title}</div>
                <p>📱 {siteConfig.contacts.phone}</p>
                <p>✉️ {siteConfig.contacts.email}</p>
              </div>
            </Link>
            <ul className="flex">
              {socialLinks.map((link) => (
                <li key={link.label} className="ml-2 first:ml-0">
                  <a
                    className="flex items-center justify-center"
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerGroups.map((group) => (
            <div
              key={group.label}
              className="sm:col-span-6 md:col-span-3 lg:col-span-2"
            >
              <h6 className="mb-3 text-sm font-bold">{group.label}</h6>
              <ul className="space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link
                        className="transition duration-150 ease-in-out"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="transition duration-150 ease-in-out">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pb-4 md:pb-8">
          <div className="text-xs">
            Copyright © {new Date().getFullYear()}. All Rights Reserved.
          </div>

          <div className="text-xs">
            The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
