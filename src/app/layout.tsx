import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "@/components/ui/sonner";
import {
  Baskervville,
  IBM_Plex_Sans,
  Libre_Baskerville,
  Roboto_Mono,
} from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "Ricardo Mayorga | Developer | Designer",
  description: "Personal website and blog of Ricardo Mayorga Mera.",
};

const plex = IBM_Plex_Sans({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-plex",
});

const baskervville = Baskervville({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-baskervville",
  weight: ["400", "700"],
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const nohemi = localFont({
  src: "../fonts/Nohemi-Black.woff2",
  variable: "--font-nohemi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${plex.variable} ${baskervville.variable} ${roboto_mono.variable} ${nohemi.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex flex-col min-h-screen p-5 md:p-12">
              {children}
              <Footer />
            </main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
