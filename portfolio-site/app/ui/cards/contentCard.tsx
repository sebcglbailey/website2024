import Link from "next/link";

import styles from "./cards.module.css";
import clsx from "clsx";

export default function ContentCard({
  children,
  href,
  isBlank,
}: {
  children: React.ReactNode;
  href?: string | null;
  isBlank?: boolean;
}) {
  if (href) {
    return (
      <Link
        href={href}
        className={styles.card}
        target={isBlank ? "_blank" : ""}
      >
        <div className={styles.cardContent}>{children}</div>
      </Link>
    );
  } else {
    return (
      <div className={clsx(styles.card)}>
        <div className={styles.cardContent}>{children}</div>
      </div>
    );
  }
}
