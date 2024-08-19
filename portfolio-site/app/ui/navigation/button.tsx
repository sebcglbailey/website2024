import { montserrat_alternates_bold } from "../fonts";

import styles from "./navigation.module.css";
import clsx from "clsx";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className={clsx(styles.button, montserrat_alternates_bold.className)}
    >
      {children}
    </button>
  );
}
