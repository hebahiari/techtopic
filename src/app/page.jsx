import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Discover and share the latest news in tech
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button url="/portfolio" text="Learn More" />
      </div>
      <div className={styles.item}>
        <Image
          src="/hero.png"
          width={500}
          height={500}
          alt=""
          className={styles.image}
        ></Image>
      </div>
    </div>
  );
}
