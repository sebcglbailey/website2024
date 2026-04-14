import type { Metadata } from "next";
import "./globals.css";
import { century_gothic } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Sebastian Bailey | Résumé",
  description: "The online résumé for Sebastian Bailey – a design leader with 10+ years experience based in London",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={century_gothic.className}>
        {children}
      </body>
    </html>
  );
}
