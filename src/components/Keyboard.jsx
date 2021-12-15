import React, { Fragment, useEffect, useState } from 'react';
import CoveredButtons from './CoveredButtons';
import Move from './Move';
import styles from './styles/Keyboard.module.css'

export default function Keyboard({ player, enemy, gameOver, setGameOver, turnDone, setTurnDone, setMessage}) {

    const [covered, setCovered] = useState(false)
    const [move, setMove] = useState({})

    const finishTurn = () => {
        if(enemy.actual_life > 0 && player.actual_life > 0){
            setCovered(false) //ambos tienen vida, sigue el juego
            setTurnDone(false)
            setMessage(`¿Qué hará ${player.name}?`)}
        else if(enemy.actual_life < 1){
            setMessage(`${player.name} Ganó`) //gana player
            setGameOver(true)
        }
        else{
            setMessage(`${enemy.name} Ganó`) //gana enemy
            setGameOver(true)
        }
    }

    const playerAttack = () => {
        setMessage(`${player.name} usó ${move.name}`);

        setTimeout(()=>{
            setMessage(`${player.attackEnemy(enemy, move)}`)
        }, 2000)
    }
    const enemyAttack = () => {
        setMessage(`${enemy.name} usó ${move.name}`); //TODO: hacer que el enemigo haga un ataque aleatorio

        setTimeout(()=>{
            setMessage(`${enemy.attackEnemy(player, move)}`)
        }, 2000)
    }
  
    useEffect (()=>{
        console.log("roto")
        if(turnDone){
            setCovered(true);

            //TODO: rehacer el sistema por turnos
            playerAttack()
            enemyAttack();
            finishTurn();
        }
        
    },[turnDone])
  
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
