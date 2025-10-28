import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { ViewTransitions } from "next-view-transitions";
import { Toaster } from "@/components/ui/sonner";
import { IBM_Plex_Sans, Libre_Baskerville } from "next/font/google";

export const metadata: Metadata = {
  title: "Ricardo Mayorga | Developer | Designer",
  description: "Personal website and blog of Ricardo Mayorga Mera.",
};

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex",
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskerville",
  weight: ["400", "700"],
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
          className={`${plex.variable} ${baskerville.variable} antialiased`}
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
