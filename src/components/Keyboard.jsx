import React, { Fragment, useEffect, useState } from 'react';
import CoveredButtons from './CoveredButtons';
import Move from './Move';
import styles from './styles/Keyboard.module.css'

export default function Keyboard({ player, enemy, gameOver, setGameOver, turnDone, setTurnDone, setMessage}) {

   const [covered, setCovered] = useState(false)
   const [move, setMove] = useState({})

   const finishTurn = () => {
        setCovered(false)
        setTurnDone(false)
        setMessage(`¿Qué hará ${player.name}?`)
   }
  
    useEffect (()=>{

        if(turnDone){

            setCovered(true)
            setMessage(`${player.name} usó ${move.name}`)

            if(enemy.actual_life > 0 && player.actual_life > 0){
                setTimeout(()=>{
                    
                    setMessage(`${player.attackEnemy(enemy, move)}`)
                    //TODO: pokemon rival necesita devolver el ataque
                    //console.log("en timming")
                    
                    setTimeout(()=> {
                        if(enemy.actual_life > 0 && player.actual_life > 0)
                            finishTurn()
                        else{
                            setMessage(`${player.name} Ganó`)
                            setGameOver(true)
                        }
                        //console.log("en stop timming")
                    },3000)
                }, 2000)
            }
        }
        
    },[turnDone, setTurnDone, setMove])
  
    return (
        <Fragment>
        <div className={styles.keyboardContainer}>
            
            <ul className={styles.movesContainer}>
                {player.movements.map((move)=>(
                    <li key={move.id}>
                        <Move move={move} setTurnDone={setTurnDone} setMove={setMove} />
                    </li>
                ))}
            </ul>
            
            <div className={styles.buttonsContainer}>
                <button className={styles.exit}>Exit</button>
                <button className={styles.more}>+</button>
                <button className={styles.bag}>Bag</button>
            </div>
        </div>
        <CoveredButtons covered={covered}/>
        </Fragment>
    )
}
