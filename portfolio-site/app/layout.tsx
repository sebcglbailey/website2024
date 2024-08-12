import type { Metadata } from "next";
import "./globals.css";
import { century_gothic } from "./ui/fonts";

import Header from "./ui/navigation/header";

import styles from "./page.module.css";

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
        <Header />
        <div className={styles.container}>
          {children}
        </div>
      </body>
    </html>
  );
}
