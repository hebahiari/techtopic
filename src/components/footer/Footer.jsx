import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>All rights reserved</div>
      <div className={styles.icons}>
        <Image
          src="/instagram.png"
          className={styles.icon}
          width={15}
          height={15}
        ></Image>
        <Image
          src="/facebook.png"
          className={styles.icon}
          width={15}
          height={15}
        ></Image>
        <Image
          src="/twitter.png"
          className={styles.icon}
          width={15}
          height={15}
        ></Image>
        <Image
          src="/github.png"
          className={styles.icon}
          width={15}
          height={15}
        ></Image>
      </div>
    </div>
  );
};

export default Footer;
