import React from 'react';
import Move from './Move';
import styles from './styles/Keyboard.module.css'

export default function Keyboard() {
    return (
        <div className={styles.keyboardContainer}>
            <table className={styles.buttonsContainer}>
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
            <div className="buttons">
                <button>Exit</button>
                <button>+</button>
                <button>Bag</button>
            </div>
        </div>
    )
}
