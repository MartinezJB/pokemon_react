import React from 'react';
import styles from './styles/PlayerDisplay.module.css'

export default function PlayerDisplay() {
    return (
        <div className={styles.playerContainer}>

            <div className={styles.imageContainer}>
                <img className={styles.playerImg} src="./charizard.gif" alt="blastoise de jugador" />
                <div className={styles.playerPlatform}></div>
            </div>

            <div className={styles.playerContainerInfo}>
                <div className={styles.playerInfo}>
                    <p id="nombrePokeJugador">Blastoise</p>
                    <p id="nivel">lvl 57</p>
                </div>

                <div className={styles.playerHealt}>
                    <label className={styles.playerHp} id={"hp"} htmlFor="barraVida">HP</label>
                    <progress className={styles.playerHealtBar} id="barraVida" max="100" min="0" value="75"></progress>
                    <label className={styles.playerHpNumeric} id="totalVida" htmlFor="barraVida">75/100</label>
                </div>
            </div>
        </div>
    )
}
