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
