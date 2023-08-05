import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>All rights reserved ©</div>
      <div className={styles.icons}>
        <Link href="/">
          <FaInstagram className={styles.icon} />
        </Link>

        <FaTwitter className={styles.icon} />
        <FaFacebook className={styles.icon} />
        <FaGithub className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
