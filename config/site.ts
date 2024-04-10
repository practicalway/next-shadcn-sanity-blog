export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
  };
  contacts: {
    email: string;
    phone: string;
  };
};
export const siteConfig: SiteConfig = {
  name: "next-shadcn-sanity-blog",
  title: " Next Blog Template ✨",
  description:
    "Introducing a Next.js 14 blogging platform, elegantly designed with ShadcnUI for a seamless and modern user interface, and powered by Sanity.io as its robust headless CMS.",
  url: "",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/kaganmert/next-shadcn-sanity-blog",
  },
  contacts: {
    email: "contact@example.com",
    phone: "08000 000 000",
  },
};
