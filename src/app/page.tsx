import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  // throw new Error("Error in Home");
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className="text-7xl font-bold m-5">Create Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
