"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkmodetoggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Porfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div>
        <Link href="/" className={styles.logo}>
          TechTopic
        </Link>
      </div>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link className={styles.link} key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
        {session.status === "unauthenticated" && (
          <button
            className={styles.logout}
            onClick={() => router?.push("/dashboard/login")}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
