import React from 'react';
import EnemyDisplay from './EnemyDisplay';
import PlayerDisplay from './PlayerDisplay';
import TextDisplay from './TextDisplay';
import styles from './styles/Display.module.css'

export default function Display() {
    return (
        <div className={styles.display}>
            <EnemyDisplay />
            <PlayerDisplay />
            <TextDisplay />
        </div>
    )
}
