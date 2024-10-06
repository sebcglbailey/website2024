"use client";

import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import Link from "next/link";

import Button from "../navigation/button";

import {
  montserrat_alternates_bold,
  century_gothic,
  century_gothic_bold,
} from "../fonts";

import styles from "./cards.module.css";
import clsx from "clsx";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined
  );
  return (
    <div className={styles.loginContainer}>
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
      <p>
        Due to sensitive information, you will require a password to access the
        details of my case studies. If you do not have access and would like
        find out more, please{" "}
        <Link
          className={century_gothic_bold.className}
          target="_blank"
          href="mailto:sebcglbailey@gmail.com?subject=I%20Want%20Your%20Work&body=Let%27s%20talk%20about%20Seb%2C%20Bailey.%20Let%27s%20talk%20about%20you%20and%20me."
        >
          reach out to me
        </Link>
        .
      </p>
    </div>
  );
}
