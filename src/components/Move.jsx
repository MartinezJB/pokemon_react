import React from "react";
import styles from './styles/Move.module.css';

export default function Move({ player, enemy, move }) {

  const attack = () => {
    console.log(enemy)
    player.attackEnemy(enemy, move)
    console.log("atacar con " + move.name)
  }
  
  return (
    <div className={styles.button} onClick={attack}>

        <h3 className={styles.moveName}>{move.name}</h3>
        
        <div className={styles.infoContainer}>
            <p className={styles.moveType}>{move.type._name}</p>
            <label htmlFor="ppCount">PP</label>
            <p className={styles.pp} id="ppCount">{move.actual_pp}/{move.max_pp}</p>
        </div>
    </div>
  );
}
