import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shourov Foisal",
  description: "Developer Portfolio - Shourov Foisal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
