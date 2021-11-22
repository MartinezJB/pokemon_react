import React from 'react';
import EnemyDisplay from './EnemyDisplay';
import PlayerDisplay from './PlayerDisplay';
import TextDisplay from './TextDisplay';
import styles from './styles/Display.module.css';


export default function Display({ enemy, player, message }) {
    return (
        <div className={styles.display}>
            <EnemyDisplay enemy={enemy} />
            <PlayerDisplay player={player} />
            <TextDisplay mensaje={message} />
        </div>
    )
}
