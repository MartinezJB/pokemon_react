import React, { Fragment, useEffect, useState } from 'react';
import CoveredButtons from './CoveredButtons';
import Move from './Move';
import styles from './styles/Keyboard.module.css'

export default function Keyboard({ player, enemy, gameOver, turnDone, setTurnDone}) {
    /*
        Esta tabla puede cambiar a una GRID list para facilitar el mapeo de los movimientos con su componente
    */
   const [covered, setCovered] = useState(false)
   
    useEffect (()=>{
        if(turnDone){
            const startTimming = setTimeout(()=>{
                setCovered(true)
                console.log("en timming")
                const stopTimming = setTimeout(()=> {
                    setCovered(false)
                    setTurnDone(false)
                    console.log("en stop timming")
                },3000)
            }, 100)
        }
    },[turnDone])
  
    return (
        <Fragment>
        <div className={styles.keyboardContainer}>
            
            <ul className={styles.movesContainer}>
                {player.movements.map((move)=>(
                    <li key={move.id}>
                        <Move move={move} player={player} enemy={enemy} gameOver={gameOver} setTurnDone={setTurnDone} />
                    </li>
                ))}
            </ul>
            
            <div className={styles.buttonsContainer}>
                <button className={styles.exit}>Exit</button>
                <button className={styles.more}>+</button>
                <button className={styles.bag}>Bag</button>
            </div>
        </div>
        <CoveredButtons covered={covered} />
        </Fragment>
    )
}
