import type { Metadata } from "next";
import pageStyles from "../page.module.css";

export const metadata: Metadata = {
  title: "Sebastian Bailey | Mini Apps",
  description: "A collection of small, useful tools built as part of Seb's portfolio",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={pageStyles.pageContainer}>{children}</div>;
}
