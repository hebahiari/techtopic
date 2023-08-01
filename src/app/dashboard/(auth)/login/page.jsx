"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [error, setError] = useState(false);
  const router = useRouter();

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
        <Link href="/dashboard/login">Login with an existing account</Link>
      </form>
      {error && "something went wrong"}
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
