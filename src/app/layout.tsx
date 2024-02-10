import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/fonts";
import { Providers } from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
