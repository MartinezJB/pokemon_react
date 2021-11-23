import React, { Fragment, useState } from 'react'
import Display from '../components/Display'
import Keyboard from '../components/Keyboard'
import { usePokemon } from '../hooks/usePokemon'
import { useMove } from '../hooks/useMove'


export default function Game() {

    const playerMovements = [
        useMove("Flamethrower", "fire", 50, 25),
        useMove("Steel tail", "steel", 50, 15),
        useMove("Mega punch", "normal", 50, 10),
        useMove("Tornado wings", "flying", 50, 30)
    ]

    const enemyMovements = [
        useMove("Hidro bomb", "water", 50, 25),
        useMove("Tail", "normal", 50, 15),
        useMove("Mega punch", "normal", 50, 10),
        useMove("Water gun", "water", 50, 30)
    ]

    const playerPokemon = usePokemon("Charizard", "fire", 150, 50, 40, playerMovements, "./charizard.gif", 59)
    const enemyPokemon = usePokemon("Blastoise", "water", 150, 50, 40,enemyMovements, "./blastoise.gif", 59)

    const [message, setMessage] = useState(`¿Qué hará ${playerPokemon.name}?`)

    const [gameOver, setGameOver] = useState(false);
    const [turnDone, setTurnDone] = useState(false);


    return (
        <Fragment>
            <Display enemy={enemyPokemon} player={playerPokemon} itsGameOver={gameOver} message={message} />
            <Keyboard player={playerPokemon} enemy={enemyPokemon} gameOver={gameOver} setGameOver={setGameOver} turnDone={turnDone} setTurnDone={setTurnDone} setMessage={setMessage} />
            <button onClick={() => console.log(playerPokemon)}>Mostrar player</button>
            <button onClick={() => console.log(enemyPokemon)}>Mostrar enemigo</button>
        </Fragment>
    )
}
