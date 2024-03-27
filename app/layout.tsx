import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), // Change to your project's domain
  title: {
    default: "Next-Shadcn-Sanity Blog",
    template: "%s | Next-Shadcn-Sanity Blog",
  },
  description:
    "A modern blogging platform powered by Next.js 14, ShadcnUI, and Sanity.io.",
  openGraph: {
    title: "Next-Shadcn-Sanity Blog",
    description:
      "Explore the future of blogging with our platform powered by Next.js 14, ShadcnUI, and Sanity.io.",
    url: "https://yourdomain.com", // Change to your project's URL
    siteName: "Next-Shadcn-Sanity Blog",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Next-Shadcn-Sanity Blog",
    card: "summary_large_image",
  },
  verification: {
    google: "YourGoogleVerificationToken", // Update with your new Google verification token
    yandex: "YourYandexVerificationToken", // Update with your new Yandex verification token
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body>{children}</body>
    </html>
  );
}
