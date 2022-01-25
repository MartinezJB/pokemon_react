import React, { Fragment, useEffect, useState } from 'react';
import CoveredButtons from './CoveredButtons';
import Move from './Move';
//import styles from './styles/Keyboard.module.css'

export default function Keyboard({ player, enemy, gameOver, setGameOver, turnDone, setTurnDone, setMessage}) {

    const [covered, setCovered] = useState(false)
    const [move, setMove] = useState({})

    const finishTurn = () => {
        return new Promise ((res, rej) => {
            setTimeout(()=>{
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
            }, 2000)
        })
        
    }

    const attack = (attacker, victim, delay) => {
        if(attacker.actual_life < 1 || victim.actual_life < 1) {
            return null
        }
        return new Promise ( (res, rej) => {
            setTimeout(()=>{
                setMessage(`${attacker.name} usó ${move.name}`);
    
                setTimeout(()=>{
                    res(setMessage(`${attacker.attackEnemy(victim, move)}`))
                }, 2000)
            }, delay)
        
        })
    }
    //TODO: hacer que el enemigo haga un ataque aleatorio, esto en el codigo del enemigo
  
    useEffect (async ()=>{
        //console.log("roto")
        if(turnDone){
            // console.log("dentro del if")
            setCovered(true);
            await attack(player, enemy, 0);
            await attack(enemy, player, 2000);
            finishTurn();
        }
        
    },[turnDone])
  
    return (
        <Fragment>
        <div className="text-center w-full">
            
            <ul className="bg-red-600 px-2 shadow-red-400 shadow-[inset_2px_2px_5px,inset_-2px_-2px_5px] grid grid-cols-2 grid-rows-2">
                {player.movements.map((move)=>(
                    <li className='m-4' key={move.id}>
                        <Move move={move} setTurnDone={setTurnDone} setMove={setMove} />
                    </li>
                ))}
            </ul>
            
            <div className="bg-red-800 py-2">
                <button className="bg-red-600 border-red-900 border-2 text-lg text-white px-4 py-2 rounded-t-lg shadow-lg hover:scale-105">Exit</button>
                <button className="bg-red-600 border-red-900 border-2 text-4xl text-white px-8 py-2 rounded-t-2xl shadow-lg hover:scale-105">+</button>
                <button className="bg-red-600 border-red-900 border-2 text-lg text-white px-4 py-2 rounded-t-lg shadow-lg hover:scale-105">Bag</button>
            </div>

        </div>

            <CoveredButtons covered={true}/> {/* cambiar a covered */}
        
        </Fragment>
    )
}
