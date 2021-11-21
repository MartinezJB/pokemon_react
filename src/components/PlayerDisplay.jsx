import React from 'react';
import styles from './styles/PlayerDisplay.module.css';

export default function PlayerDisplay({ player }) {

    return (
        <div className={styles.playerContainer}>

            <div className={styles.imageContainer}>
                <img className={styles.playerImg} src={player.urlImg} alt={player.name} />
                <div className={styles.playerPlatform}></div>
            </div>

            <div className={styles.playerContainerInfo}>
                <div className={styles.playerInfo}>
                    <p id="nombrePokeJugador">{player.name}</p>
                    <p id="nivel">lvl {player.lvl}</p>
                </div>

                <div className={styles.playerHealt}>
                    <label className={styles.playerHp} id={"hp"} htmlFor="barraVida">HP</label>
                    <progress className={styles.playerHealtBar} id="barraVida" min="0" max={player.max_life} value={player.actual_life}></progress>
                    <label className={styles.playerHpNumeric} id="totalVida" htmlFor="barraVida">{player.actual_life}/{player.max_life}</label>
                </div>
            </div>
        </div>
    )
}
