"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const [error, setError] = useState(false);
  const session = useSession();
  const router = useRouter();

  /// this part redirects logged in users to their dashboard
  if (session.status === "loading") {
    return <img className="spinner" src="/loading.gif" />;
  }

  if (session.status === "authenticated") {
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
          placeholder="Enter your email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Log In</button>
      </form>
      {error && "something went wrong"}
      <button className={styles.googlebutton} onClick={() => signIn("google")}>
        <Image
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
          width={20}
          height={20}
        />
        Log In with Google{" "}
      </button>
      <Link href="/dashboard/register">New here? Click here to sign up</Link>
    </div>
  );
};

export default Login;
