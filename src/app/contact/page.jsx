import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Contact Us",
  description: "This is the contact page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Send Us A Message!</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/5861590/pexels-photo-5861590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
            alt="cover image"
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            className={styles.textArea}
            cols="30"
            rows="10"
          />
          <Button url="#" text="send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
