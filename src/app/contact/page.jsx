"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

// export const metadata = {
//   title: "Contact Us",
//   description: "This is the contact page",
// };

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Send Us A Message!</h1>
      <div className={styles.content}>
        <img src="/contact.png" className={styles.imageContainer} />
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="email"
            className={styles.input}
            required
          />
          <textarea
            placeholder="message"
            className={styles.textArea}
            cols="30"
            rows="10"
            required
          />
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
