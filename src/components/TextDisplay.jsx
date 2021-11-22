import React from 'react';
import styles from './styles/TextDisplay.module.css'

export default function TextDisplay({ mensaje }) {
    return (
        <div className={styles.textContainer} id="mensaje">
                <p className={styles.text} id="text">{mensaje}</p>
        </div>
    )
}
