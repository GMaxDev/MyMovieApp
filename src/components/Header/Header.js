import React from "react";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">MyMovieApp</Link>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li><Link href="/series">Séries</Link></li>
            <li><Link href="/movies">Films</Link></li>
          </ul>
        </nav>
      </div>
      <input type="text" placeholder="Rechercher une titre ..." />
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
}
