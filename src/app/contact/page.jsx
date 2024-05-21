"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

// export const metadata = {
//   title: "Contact Us",
//   description: "This is the contact page",
// };

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    try {
      if(!/\.(jpg|jpeg|png|gif)$/i.test(image)){
        throw Error('please use a proper image url')
      }
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      res.status === 201 && router.push("/");
    } catch (error) {
      console.log(error);
    }
    alert("Message Sent Successfully!");
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
