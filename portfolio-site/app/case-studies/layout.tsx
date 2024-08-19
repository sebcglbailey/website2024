import type { Metadata } from "next";

import pageStyles from "../page.module.css";

export const metadata: Metadata = {
  title: "Sebastian Bailey | Case Studies",
  description: "An overview of Seb's latest work",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={pageStyles.pageContainer}>
      <h1>Case Studies</h1>
      {children}
    </div>
  );
}
