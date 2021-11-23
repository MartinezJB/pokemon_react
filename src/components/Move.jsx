import React from "react";
import styles from './styles/Move.module.css';

export default function Move({ move, setTurnDone, setMove }) {
  
  return (
    <div className={styles.button} onClick={()=>{setMove(move); setTurnDone(true)}}>

        <h3 className={styles.moveName}>{move.name}</h3>
        
        <div className={styles.infoContainer}>
            <p className={styles.moveType}>{move.type._name}</p>
            <label htmlFor="ppCount">PP</label>
            <p className={styles.pp} id="ppCount">{move.actual_pp}/{move.max_pp}</p>
        </div>
    </div>
  );
}
