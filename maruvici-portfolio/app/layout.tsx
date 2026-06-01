import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mark — Portfolio",
  description: "Automation Engineer & Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}