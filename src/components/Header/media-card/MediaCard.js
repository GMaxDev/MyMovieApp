import styles from "./MediaCard.module.scss";
import Image from "next/image";

export default function MediaCard() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
          alt="media title"
          fill
        />
      </div>
      <div className={styles.content}>
        <h2>Creed III</h2>
        <p>01/03/2023</p>
      </div>
    </div>
  );
}
