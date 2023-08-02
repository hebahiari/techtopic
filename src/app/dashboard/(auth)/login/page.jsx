"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [error, setError] = useState(false);
  const session = useSession();
  const router = useRouter();

  /// this part redirects logged in users to their dashboard
  if (session.status === "loading") {
    return <p>Loading.... </p>;
  }

  if (session.status === "authenticated") {
    return <div className={styles.container}>Dashboard</div>;
    router?.push("/dashboard");
  }
  //////

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      {error && "something went wrong"}
      <button className={styles.button} onClick={() => signIn("google")}>
        Log In with Google
      </button>
      <Link href="/dashboard/register">New here? Click here to sign up</Link>
    </div>
  );
};

export default Login;
