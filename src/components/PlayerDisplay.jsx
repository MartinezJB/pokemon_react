import React, { useEffect, useState } from 'react';
import styles from './styles/PlayerDisplay.module.css';

export default function PlayerDisplay({ player }) {

    const [name, setName] = useState(player.name);
    const [lvl, setLvl] = useState(player.lvl);
    const [max_life, setMax_life] = useState(player.max_life);
    const [actual_life, setActual_Life] = useState(player.actual_life);
    const [urlImg, setUrlImg] = useState(player.urlImg);

    useEffect( ()=> {
        setName(player.name);
        setLvl(player.lvl);
        setMax_life(player.max_life);
        setActual_Life(player.actual_life);
        setUrlImg(player.urlImg);
        console.log("roto")
    })

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
