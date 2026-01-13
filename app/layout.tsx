import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header"; // 👈 import
// no need to import Link/Image here anymore

export const metadata: Metadata = {
  title: "Alliance Black Knights Rugby",
  description:
    "Alliance Black Knights Rugby Club – community rugby built on grit, discipline, and brotherhood.",
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
        <Header />

        {/* Page content */}
        <main className="flex-1 pt-16">{children}</main>

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
      </body>
    </html>
  );
}
