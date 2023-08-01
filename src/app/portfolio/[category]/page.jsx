import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>tit</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/2470263/pexels-photo-2470263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>tit</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/2470263/pexels-photo-2470263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>tit</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/2470263/pexels-photo-2470263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>tit</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/2470263/pexels-photo-2470263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
