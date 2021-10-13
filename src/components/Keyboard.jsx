import React from 'react';
import Move from './Move';
import styles from './styles/Keyboard.module.css'

export default function Keyboard() {
    return (
        <div className={styles.keyboardContainer}>
            <table className={styles.movesContainer}>
            <tbody>
                <tr>
                    <td id="ATAQUE1">
                        <Move moveName="Move name" type="type" pp="22/22" />
                    </td>
                    <td id="ATAQUE2">
                        <Move moveName="Move name" type="type" pp="22/22" />
                    </td>
                </tr>

                <tr>
                    <td id="ATAQUE3">
                        <Move moveName="Move name" type="type" pp="22/22" />
                    </td>
                    <td id="ATAQUE4">
                        <Move moveName="Move name" type="type" pp="22/22" />
                    </td>
                </tr>
            </tbody>
            </table>
            <div className={styles.buttonsContainer}>
                <button className={styles.exit}>Exit</button>
                <button className={styles.more}>+</button>
                <button className={styles.bag}>Bag</button>
            </div>
        </div>
    )
}
