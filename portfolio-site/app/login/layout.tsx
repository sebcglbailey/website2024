import type { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sebastian Bailey | Login",
  description: "Please login to view Seb's case studies",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.pageContainer}>{children}</div>;
}
