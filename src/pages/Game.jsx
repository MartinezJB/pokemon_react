import React, { Fragment } from 'react'
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
    const playerPokemon = usePokemon("Charizard", "fire", 150, 50, 40, playerMovements, "./charizard.gif", 59)
    const enemyPokemon = usePokemon("Blastoise", "water", 150, 50, 40, [], "./blastoise.gif", 59)
    console.log(enemyPokemon)
    return (
        <Fragment>
            <Display enemy={enemyPokemon} player={playerPokemon} />
            <Keyboard player={playerPokemon} enemy={enemyPokemon}/>
        </Fragment>
    )
}
