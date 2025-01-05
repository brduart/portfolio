import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bruno Duarte",
  description: "Bruno Duarte desenvolvedor full-stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#080614] antialiased ${rubik.className}`}>{children}</body>
    </html>
  );
}
