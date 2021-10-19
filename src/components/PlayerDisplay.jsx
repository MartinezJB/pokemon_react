import React from 'react';
import styles from './styles/PlayerDisplay.module.css';

export default function PlayerDisplay({ player }) {
    let { name, lvl, max_life, actual_life, urlImg } = player;

    return (
        <div className={styles.playerContainer}>

            <div className={styles.imageContainer}>
                <img className={styles.playerImg} src={urlImg} alt={name} />
                <div className={styles.playerPlatform}></div>
            </div>

            <div className={styles.playerContainerInfo}>
                <div className={styles.playerInfo}>
                    <p id="nombrePokeJugador">{name}</p>
                    <p id="nivel">lvl {lvl}</p>
                </div>

                <div className={styles.playerHealt}>
                    <label className={styles.playerHp} id={"hp"} htmlFor="barraVida">HP</label>
                    <progress className={styles.playerHealtBar} id="barraVida" min="0" max={max_life} value={actual_life}></progress>
                    <label className={styles.playerHpNumeric} id="totalVida" htmlFor="barraVida">{actual_life}/{max_life}</label>
                </div>
            </div>
        </div>
    )
}
