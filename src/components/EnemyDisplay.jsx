import React from 'react';
import styles from './styles/EnemyDisplay.module.css';

export default function EnemyDisplay({ enemy }) {
    let { name, lvl, max_life, actual_life, urlImg } = enemy;

    return (
        <div className={styles.enemyContainer}>
            {/* Imagen */}
            <div className={styles.imageContainer}>
                <img className="w-1/3" src={urlImg} alt={name} />
                <div className="bg-red-600">Hola</div>
                
            </div>

            {/* Info */}
            <div className={styles.enemyContainerInfo}>
                <div className={styles.enemyInfo}>
                    <p className="nombreEnemigo" id="nombrePokeRival">{name}</p>
                    <p className="nivelRival" id="nivelRival">lvl {lvl}</p>
                </div>

                <div className={styles.enemyHealt}>
                    <label className={styles.enemyHp} htmlFor="vidaRival">HP</label>
                    <progress className={styles.enemyHealtBar} id="vidaRival" min="0" max={max_life} value={actual_life}></progress>
                </div>
            </div>
        </div>
    )
}
