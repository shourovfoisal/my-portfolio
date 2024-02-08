"use client";
import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeContextProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Shourov Foisal",
  description: "Developer Portfolio - Shourov Foisal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        {children}
        {/* <body className={poppins.className}>
          <div className="pb-wrapperPaddingBottom bg-BlackTan">
            <section className="bg-BlackTan pt-sectionPadding">
              <div className="container">
                <Navbar />
              </div>
            </section>
            {children}
          </div>
        </body> */}
      </ThemeContextProvider>
    </html>
  );
}
