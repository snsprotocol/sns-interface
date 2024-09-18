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
    { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon/favicon-16x16.png" },
  ],
  manifest: "/favicon/site.webmanifest"
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
              <svg className="scale-[-1] opacity-30" width="100%" height="100" viewBox="0 0 100 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad-light" x1="0%" y1="0%" x2="100%" y2="0%"><stop stop-color="#102D3C"></stop><stop offset="0.161465" stop-color="#214E81"></stop><stop offset="0.363625" stop-color="#506179"></stop><stop offset="0.651499" stop-color="#ED5409"></stop><stop offset="1" stop-color="#FFCB67"></stop></linearGradient><linearGradient id="grad-dark" x1="0%" y1="0%" x2="100%" y2="0%"><stop stop-color="#FFCB67"></stop><stop offset="0.161465" stop-color="#ED5409"></stop><stop offset="0.363625" stop-color="#506179"></stop><stop offset="0.651499" stop-color="#214E81"></stop><stop offset="1" stop-color="#102D3C"></stop></linearGradient><mask id="rectanglesMask"><line x1="0" y1="0" x2="100" y2="0" stroke="white" stroke-width="1"></line><line x1="0" y1="10" x2="100" y2="10" stroke="white" stroke-width="1"></line><line x1="0" y1="20" x2="100" y2="20" stroke="white" stroke-width="1.5"></line><line x1="0" y1="30" x2="100" y2="30" stroke="white" stroke-width="2"></line><line x1="0" y1="40" x2="100" y2="40" stroke="white" stroke-width="2.5"></line><line x1="0" y1="50" x2="100" y2="50" stroke="white" stroke-width="3"></line><line x1="0" y1="60" x2="100" y2="60" stroke="white" stroke-width="3.5"></line><line x1="0" y1="70" x2="100" y2="70" stroke="white" stroke-width="4"></line><line x1="0" y1="80" x2="100" y2="80" stroke="white" stroke-width="4.5"></line><line x1="0" y1="90" x2="100" y2="90" stroke="white" stroke-width="5"></line><line x1="0" y1="100" x2="100" y2="100" stroke="white" stroke-width="5.5"></line><line x1="0" y1="110" x2="100" y2="110" stroke="white" stroke-width="6"></line><line x1="0" y1="120" x2="100" y2="120" stroke="white" stroke-width="6.5"></line><line x1="0" y1="130" x2="100" y2="130" stroke="white" stroke-width="7"></line><line x1="0" y1="140" x2="100" y2="140" stroke="white" stroke-width="7.5"></line><line x1="0" y1="150" x2="100" y2="150" stroke="white" stroke-width="8"></line><line x1="0" y1="160" x2="100" y2="160" stroke="white" stroke-width="8.5"></line><line x1="0" y1="170" x2="100" y2="170" stroke="white" stroke-width="9"></line><line x1="0" y1="180" x2="100" y2="180" stroke="white" stroke-width="9.5"></line><line x1="0" y1="190" x2="100" y2="190" stroke="white" stroke-width="10"></line><line x1="0" y1="200" x2="100" y2="200" stroke="white" stroke-width="10.5"></line></mask></defs><rect width="100%" height="100%" className="fill-[url(#grad-light)] theme-dark:fill-[url(#grad-dark)]" mask="url(#rectanglesMask)"></rect></svg>
            </div>
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">

              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center">
              <span className="text-default-500 py-6 text-xs">SNS, Copyright, 2024. All Rights Reserved.</span>
              <div className="w-full">
                <svg className="opacity-30" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0" stop-color="#141416"></stop><stop offset="0.15" stop-color="#102D3C"></stop><stop offset="0.36" stop-color="#506179"></stop><stop offset="0.45" stop-color="#FFA59D"></stop><stop offset="0.70" stop-color="#FFCB67"></stop><stop offset="1" stop-color="#214E81"></stop></linearGradient><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%"><stop stop-color="#FFCB67"></stop><stop offset="0.35" stop-color="#ED5409"></stop><stop offset="0.64" stop-color="#506179"></stop><stop offset="0.84" stop-color="#214E81"></stop><stop offset="1" stop-color="#102D3C"></stop></linearGradient><pattern id="spikesPattern" patternUnits="userSpaceOnUse" width="5" height="281"><path d="M 0 281 L 5 0 L 10 281 Z" fill="white"></path></pattern><mask id="spikesMask"><rect width="100%" height="281" fill="url(#spikesPattern)"></rect></mask></defs><rect width="100%" height="281" className="fill-[url(#grad1)] theme-dark:fill-[url(#grad2)]" mask="url(#spikesMask)"></rect></svg>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
