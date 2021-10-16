import React from "react";
import styles from './styles/Move.module.css';
export default function Move({ move }) {
  let { name, type, max_pp, actual_pp } = move;
  return (
    <div className={styles.button}>

        <h3 className={styles.moveName}>{name}</h3>
        
        <div className={styles.infoContainer}>
            <p className={styles.moveType}>{type}</p>
            <label htmlFor="ppCount">PP</label>
            <p className={styles.pp} id="ppCount">{actual_pp}/{max_pp}</p>
        </div>
    </div>
  );
}
