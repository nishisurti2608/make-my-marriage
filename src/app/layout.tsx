import type { Metadata } from "next";
import "./globals.css";

export const runtime = "nodejs";
export const metadata: Metadata = {
  title: "Make My Marriage",
  description: "Make My Marriage application scaffold.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
