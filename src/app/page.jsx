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
          Join us at TechTopic and become a part of the rapidly growing tech
          community. Stay informed, inspired, and connected with the world of
          technology. Whether you are a tech guru or a curious newcomer,
          TechTopic is your go-to platform for all things tech!
        </p>
        <Button url="/dashboard" text="Get Started" />
      </div>
      <img src="/heroin.png" className={styles.imageContainer} />
    </div>
  );
}
