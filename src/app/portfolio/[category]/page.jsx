import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@/components/button/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { items } from "./data";

const getData = (category) => {
  const data = items[category];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div>
      <h1 className={styles.mainTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imageContainer}>
            <Image className={styles.image} src={item.image} fill={true} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
