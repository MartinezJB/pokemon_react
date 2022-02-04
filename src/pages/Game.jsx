import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Display from '../components/Display'
import Keyboard from '../components/Keyboard'
import { usePokemon } from '../hooks/usePokemon'
import { useMove } from '../hooks/useMove'
import { pokeApiFetchById } from '../utils/pokeApiFetchById'
import { pokeApiAdapterLocalById } from '../utils/pokeApiAdapterLocalById'

import { Movement } from "../hooks/game_scripts/movements"

export default function Game() {
    
    const { player_id, enemy_id } = useParams();

    const [playerPokemon, setPlayerPokemon] = useState({});
    const [enemyPokemon, setEnemyPokemon] = useState({});

    useEffect (async()=>{
        setPlayerPokemon(await pokeApiAdapterLocalById(player_id));
        setEnemyPokemon(await pokeApiAdapterLocalById(enemy_id));
    }, []);

    const playerMovements = [
        new Movement("move clase", "fire", 34, 10),
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
    //crear un atributo para el sprite de espalda
    const playerPokemonNoVa = usePokemon("Charizard", "fire", 150, 50, 40, playerMovements, "./charizard_front.png", "./charizard_back.png", 59)
    const enemyPokemonNoVa = usePokemon("Blastoise", "water", 150, 50, 40,enemyMovements, "./blastoise_front.png", "./blastoise_back.png", 59)
    const [message, setMessage] = useState("");
    

    const [gameOver, setGameOver] = useState(false);
    const [turnDone, setTurnDone] = useState(false);

    const [playerAttacking, setPlayerAttacking] = useState(false);
    const [enemyAttacking, setEnemyAttacking] = useState(false);

    return (
        <div className='h-screen overflow-hidden'>
            {Object.keys(playerPokemon).length === 0 || Object.keys(enemyPokemon).length === 0 ? (<div>Cargando contenido...</div>):(
                <Fragment>
                    <Display enemy={enemyPokemon} player={playerPokemon} itsGameOver={gameOver} message={message} playerAttacking={playerAttacking} enemyAttacking={enemyAttacking}/>
                    <Keyboard player={playerPokemon} enemy={enemyPokemon} gameOver={gameOver} setGameOver={setGameOver} turnDone={turnDone} setTurnDone={setTurnDone} setMessage={setMessage} setPlayerAttacking={setPlayerAttacking} setEnemyAttacking={setEnemyAttacking} />
                </Fragment>
            )}
        </div>
    )
}
