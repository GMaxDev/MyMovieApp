import React from "react";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>MyMovieApp</p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>Séries</li>
            <li>Films</li>
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
