import type { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sebastian Bailey | Mini App: Timber Cut Planner",
  description: "A mini app to calculate optimal cutting lengths to purchase for panel creation",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.timberPlanner}>{children}</div>;
}
