import React from 'react';
import Move from './Move';
import styles from './styles/Keyboard.module.css'

export default function Keyboard({ player, enemy }) {
    /*
        Esta tabla puede cambiar a una GRID list para facilitar el mapeo de los movimientos con su componente
    */
  
    return (
        <div className={styles.keyboardContainer}>
            
            <ul className={styles.movesContainer}>
                {player.movements.map((move)=>(
                    <li key={move.id}>
                        <Move move={move} player={player} enemy={enemy}/>
                    </li>
                ))}
            </ul>
            
            <div className={styles.buttonsContainer}>
                <button className={styles.exit}>Exit</button>
                <button className={styles.more}>+</button>
                <button className={styles.bag}>Bag</button>
            </div>
        </div>
    )
}
