import React from 'react';
import Move from './Move';
import styles from './styles/Keyboard.module.css'

export default function Keyboard({ player, playerMovement }) {
    /*
        Esta tabla puede cambiar a una GRID list para facilitar el mapeo de los movimientos con su componente
    */
   
    return (
        <div className={styles.keyboardContainer}>
            <table className={styles.movesContainer}>
            <tbody>
                <tr>
                    <td id="ATAQUE1">
                        <Move move={playerMovement[0]}/>
                    </td>
                    <td id="ATAQUE2">
                    <Move move={playerMovement[1]}/>
                    </td>
                </tr>

                <tr>
                    <td id="ATAQUE3">
                        <Move move={playerMovement[2]}/>
                    </td>
                    <td id="ATAQUE4">
                        <Move move={playerMovement[3]}/>
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
