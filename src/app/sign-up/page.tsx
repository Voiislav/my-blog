"use client";

import { useSignUp } from "~/domains/user/sign-up/use-sign-up";
import { Input } from "~/components/input";
import styles from "./index.module.css";
import { useFormState } from "react-dom";
import { signUp } from "../actions/sign-up";

export default function SignUpPage() {
  const [state, action] = useFormState(signUp, undefined);
  const form = useSignUp();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.greeting}>Welcome to MyBlog!</h1>
      <form className={styles.form} action={action}>
        <div className={styles.input}>
          <Input
            type="text"
            {...form.register("displayName")}
            placeholder="Your name"
          />
          {(state?.errors?.displayName && (
            <p className={styles.error}>{state.errors.displayName}</p>
          )) ?? <p className={styles.gap}></p>}
        </div>
        <div className={styles.input}>
          <Input
            type="email"
            {...form.register("email")}
            placeholder="Your e-mail"
          />
          {(state?.errors?.email && (
            <p className={styles.error}>{state.errors.email}</p>
          )) ?? <p className={styles.gap}></p>}
        </div>
        <div className={styles.input}>
          <Input
            type="password"
            {...form.register("password")}
            placeholder="Your password"
          />
          {(state?.errors?.password && (
            <p className={styles.error}>{state.errors.password}</p>
          )) ?? <p className={styles.gap}></p>}
        </div>
        <div className={styles.input}>
          <Input
            type="password"
            {...form.register("confirmPassword")}
            placeholder="Confirm your password"
          />
          {(state?.errors?.confirmPassword && (
            <p className={styles.error}>{state.errors.confirmPassword}</p>
          )) ?? <p className={styles.gap}></p>}
        </div>
        <button className={styles.submit} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
