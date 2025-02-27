import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
  ],
  manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <div className="w-full">
              <svg
                className="scale-[-1] opacity-30"
                height="100"
                preserveAspectRatio="none"
                viewBox="0 0 100 200"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="grad-light"
                    x1="0%"
                    x2="100%"
                    y1="0%"
                    y2="0%"
                  >
                    <stop stopColor="#102D3C" />
                    <stop offset="0.161465" stopColor="#214E81" />
                    <stop offset="0.363625" stopColor="#506179" />
                    <stop offset="0.651499" stopColor="#ED5409" />
                    <stop offset="1" stopColor="#FFCB67" />
                  </linearGradient>
                  <linearGradient
                    id="grad-dark"
                    x1="0%"
                    x2="100%"
                    y1="0%"
                    y2="0%"
                  >
                    <stop stopColor="#FFCB67" />
                    <stop offset="0.161465" stopColor="#ED5409" />
                    <stop offset="0.363625" stopColor="#506179" />
                    <stop offset="0.651499" stopColor="#214E81" />
                    <stop offset="1" stopColor="#102D3C" />
                  </linearGradient>
                  <mask id="rectanglesMask">
                    <line
                      stroke="white"
                      strokeWidth="1"
                      x1="0"
                      x2="100"
                      y1="0"
                      y2="0"
                    />
                    <line
                      stroke="white"
                      strokeWidth="1"
                      x1="0"
                      x2="100"
                      y1="10"
                      y2="10"
                    />
                    <line
                      stroke="white"
                      strokeWidth="1.5"
                      x1="0"
                      x2="100"
                      y1="20"
                      y2="20"
                    />
                    <line
                      stroke="white"
                      strokeWidth="2"
                      x1="0"
                      x2="100"
                      y1="30"
                      y2="30"
                    />
                    <line
                      stroke="white"
                      strokeWidth="2.5"
                      x1="0"
                      x2="100"
                      y1="40"
                      y2="40"
                    />
                    <line
                      stroke="white"
                      strokeWidth="3"
                      x1="0"
                      x2="100"
                      y1="50"
                      y2="50"
                    />
                    <line
                      stroke="white"
                      strokeWidth="3.5"
                      x1="0"
                      x2="100"
                      y1="60"
                      y2="60"
                    />
                    <line
                      stroke="white"
                      strokeWidth="4"
                      x1="0"
                      x2="100"
                      y1="70"
                      y2="70"
                    />
                    <line
                      stroke="white"
                      strokeWidth="4.5"
                      x1="0"
                      x2="100"
                      y1="80"
                      y2="80"
                    />
                    <line
                      stroke="white"
                      strokeWidth="5"
                      x1="0"
                      x2="100"
                      y1="90"
                      y2="90"
                    />
                    <line
                      stroke="white"
                      strokeWidth="5.5"
                      x1="0"
                      x2="100"
                      y1="100"
                      y2="100"
                    />
                    <line
                      stroke="white"
                      strokeWidth="6"
                      x1="0"
                      x2="100"
                      y1="110"
                      y2="110"
                    />
                    <line
                      stroke="white"
                      strokeWidth="6.5"
                      x1="0"
                      x2="100"
                      y1="120"
                      y2="120"
                    />
                    <line
                      stroke="white"
                      strokeWidth="7"
                      x1="0"
                      x2="100"
                      y1="130"
                      y2="130"
                    />
                    <line
                      stroke="white"
                      strokeWidth="7.5"
                      x1="0"
                      x2="100"
                      y1="140"
                      y2="140"
                    />
                    <line
                      stroke="white"
                      strokeWidth="8"
                      x1="0"
                      x2="100"
                      y1="150"
                      y2="150"
                    />
                    <line
                      stroke="white"
                      strokeWidth="8.5"
                      x1="0"
                      x2="100"
                      y1="160"
                      y2="160"
                    />
                    <line
                      stroke="white"
                      strokeWidth="9"
                      x1="0"
                      x2="100"
                      y1="170"
                      y2="170"
                    />
                    <line
                      stroke="white"
                      strokeWidth="9.5"
                      x1="0"
                      x2="100"
                      y1="180"
                      y2="180"
                    />
                    <line
                      stroke="white"
                      strokeWidth="10"
                      x1="0"
                      x2="100"
                      y1="190"
                      y2="190"
                    />
                    <line
                      stroke="white"
                      strokeWidth="10.5"
                      x1="0"
                      x2="100"
                      y1="200"
                      y2="200"
                    />
                  </mask>
                </defs>
                <rect
                  className="fill-[url(#grad-light)] theme-dark:fill-[url(#grad-dark)]"
                  height="100%"
                  mask="url(#rectanglesMask)"
                  width="100%"
                />
              </svg>
            </div>
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center">
              <span className="text-default-500 py-6 text-xs">
                SNS, Copyright, 2025. All Rights Reserved.
              </span>
              <div className="w-full">
                <svg
                  className="opacity-30"
                  height="100"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      x2="100%"
                      y1="0%"
                      y2="0%"
                    >
                      <stop offset="0" stopColor="#141416" />
                      <stop offset="0.15" stopColor="#102D3C" />
                      <stop offset="0.36" stopColor="#506179" />
                      <stop offset="0.45" stopColor="#FFA59D" />
                      <stop offset="0.70" stopColor="#FFCB67" />
                      <stop offset="1" stopColor="#214E81" />
                    </linearGradient>
                    <linearGradient
                      id="grad2"
                      x1="0%"
                      x2="100%"
                      y1="0%"
                      y2="0%"
                    >
                      <stop stopColor="#FFCB67" />
                      <stop offset="0.35" stopColor="#ED5409" />
                      <stop offset="0.64" stopColor="#506179" />
                      <stop offset="0.84" stopColor="#214E81" />
                      <stop offset="1" stopColor="#102D3C" />
                    </linearGradient>
                    <pattern
                      height="281"
                      id="spikesPattern"
                      patternUnits="userSpaceOnUse"
                      width="5"
                    >
                      <path d="M 0 281 L 5 0 L 10 281 Z" fill="white" />
                    </pattern>
                    <mask id="spikesMask">
                      <rect
                        fill="url(#spikesPattern)"
                        height="281"
                        width="100%"
                      />
                    </mask>
                  </defs>
                  <rect
                    className="fill-[url(#grad1)] theme-dark:fill-[url(#grad2)]"
                    height="281"
                    mask="url(#spikesMask)"
                    width="100%"
                  />
                </svg>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
