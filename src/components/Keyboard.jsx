import React, { Fragment, useEffect, useState } from 'react';
import CoveredButtons from './CoveredButtons';
import Move from './Move';
import styles from './styles/Keyboard.module.css'

export default function Keyboard({ player, enemy, gameOver, turnDone, setTurnDone, setMessage}) {

   const [covered, setCovered] = useState(false)
   const [moveName, setMoveName] = useState("")
   
    useEffect (()=>{

        if(turnDone){
            setTimeout(()=>{
                setCovered(true)
                setMessage(`${player.name} usó ${moveName}`)
                console.log("en timming")
                setTimeout(()=> {
                    setCovered(false)
                    setTurnDone(false)
                    setMessage(`¿Qué hará ${player.name}?`)
                    console.log("en stop timming")
                },3000)
            }, 100)
        }
        
    },[turnDone, setTurnDone, setMoveName])
  
    return (
        <Fragment>
        <div className={styles.keyboardContainer}>
            
            <ul className={styles.movesContainer}>
                {player.movements.map((move)=>(
                    <li key={move.id}>
                        <Move move={move} player={player} enemy={enemy} gameOver={gameOver} setTurnDone={setTurnDone} setMoveName={setMoveName} />
                    </li>
                ))}
            </ul>
            
            <div className={styles.buttonsContainer}>
                <button className={styles.exit}>Exit</button>
                <button className={styles.more}>+</button>
                <button className={styles.bag}>Bag</button>
            </div>
        </div>
        <CoveredButtons covered={covered} setCovered={setCovered} setMessage={setMessage} player={player} />
        </Fragment>
    )
}
