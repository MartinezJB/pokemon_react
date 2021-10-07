import React from 'react';
import styles from './styles/EnemyDisplay.module.css';
export default function EnemyDisplay() {
    return (
        <div className={styles.enemyContainer}>

            <div className={styles.imageContainer}>
                <img className={styles.enemyImg} id="pokemon-rival" name="Sceptile" src="./blastoise.gif" alt="rival" />
                <div className={styles.enemyPlatform}></div>
            </div>

            <div className={styles.enemyContainerInfo}>
                <div className={styles.enemyInfo}>
                    <p className="nombreEnemigo" id="nombrePokeRival">Blastoise</p>
                    <p className="nivelRival" id="nivelRival">lvl 55</p>
                </div>

                <div className={styles.enemyHealt}>
                    <label className={styles.enemyHp} htmlFor="vidaRival">HP</label>
                    <progress className={styles.enemyHealtBar} id="vidaRival" max="100" min="0" value="90"></progress>
                </div>
            </div>
        </div>
    )
}
