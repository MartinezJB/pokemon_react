import React from 'react';
import styles from './styles/TextDisplay.module.css'

export default function TextDisplay() {
    return (
        <div className={styles.textContainer} id="mensaje">
                <p className={styles.text} id="text">Lorem, ipsum da d da dolor sit amet consa</p>
        </div>
    )
}
