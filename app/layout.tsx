import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Alliance Black Knights Rugby",
  description: "Alliance Black Knights Rugby Club – community rugby built on grit, discipline, and brotherhood.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* Header / Nav */}
        <header id="site-header" className="fixed top-0 z-50 w-full transition-all duration-300">
          <div className="mx-auto flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-10">
                <Image
                  src="/alliance-shield.png"
                  alt="Alliance Black Knights Rugby logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="leading-tight">
                <div className="text-md uppercase font-semibold tracking-[0.25em] text-gray-300">
                  Alliance Black Knights 
                </div>
                <div className="text-lg tracking-wide">
                  Rugby
                </div>
              </div>
            </Link>

            <nav className="hidden gap-6 text-sm font-medium md:flex">
              <Link href="#schedule" className="hover:text-yellow-400">
                Schedule
              </Link>
              <Link href="#team" className="hover:text-yellow-400">
                Team
              </Link>
              <Link href="#sponsors" className="hover:text-yellow-400">
                Sponsors
              </Link>
              <Link href="#contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-black py-6 text-xs text-gray-400">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
            <div>
              © {new Date().getFullYear()} Alliance Black Knights Rugby. All
              rights reserved.
            </div>
            <div className="flex gap-4">
              <span className="uppercase tracking-[0.2em] text-gray-500">
                Fortes Fortuna Juvat
              </span>
            </div>
          </div>
        </footer>
        <script
  dangerouslySetInnerHTML={{
    __html: `
      const header = document.getElementById('site-header');
      const handleScroll = () => {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    `,
  }}
/>

      </body>
    </html>
  );
}
