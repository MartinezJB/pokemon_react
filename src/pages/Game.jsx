import React, { Fragment } from 'react'
import Display from '../components/Display'
import Keyboard from '../components/Keyboard'
import { usePokemon } from '../hooks/usePokemon'

import pokemon from './examples/pokemon.json'


export default function Game() {

    const pokek = usePokemon("charizard", "fire", 150, 50, 40, [], "./charizard.gif", 59)

    return (
        <Fragment>
            <Display enemy={pokemon[0]} player={pokek} />
            <Keyboard player={pokek} playerMovement={pokemon[1].movements} />
        </Fragment>
    )
}
