"use client";

import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/actions";

import Button from "../navigation/button";

import { montserrat_alternates_bold, century_gothic } from "../fonts";

import styles from "./cards.module.css";
import clsx from "clsx";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined
  );
  return (
    <div className={clsx(styles.card, styles.contentCard)}>
      <form action={formAction} className={styles.form}>
        <div className={styles.username}>
          <label
            className={clsx(montserrat_alternates_bold.className)}
            htmlFor="username"
            hidden
          >
            Username
          </label>
          <input
            className={clsx(styles.input, century_gothic.className)}
            id="username"
            name="username"
            type="text"
            placeholder="Type Username"
            required
            value="Guest"
            hidden
          />
        </div>
        <div className={styles.inputContainer}>
          <label
            className={montserrat_alternates_bold.className}
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={clsx(styles.input, century_gothic.className)}
            id="password"
            name="password"
            type="password"
            placeholder="Type password"
            required
          />
        </div>
        <Button aria-disabled={isPending}>View case studies</Button>
        {errorMessage && (
          <>
            <p className={styles.formError}>{errorMessage}</p>
          </>
        )}
      </form>
    </div>
  );
}
