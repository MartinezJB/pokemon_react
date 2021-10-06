import React from "react";
import styles from './styles/Move.module.css';
export default function Move({ moveName, type, pp }) {
  return (
    <div className={styles.button}>

        <h3 className={styles.moveName}>{moveName}</h3>
        
        <div className={styles.infoContainer}>
            <p className={styles.moveType}>{type}</p>
            <label htmlFor="ppCount">PP</label>
            <p className={styles.pp} id="ppCount">{pp}</p>
        </div>
    </div>
  );
}
