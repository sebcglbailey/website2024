import LoginForm from "../ui/cards/loginForm";

import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
