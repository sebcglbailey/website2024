import Header from "../ui/navigation/header";
import styles from "./page.module.css";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {children}
      </div>
    </>
  );
}
