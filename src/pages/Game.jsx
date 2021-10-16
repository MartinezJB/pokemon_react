import React, { Fragment } from 'react'
import Display from '../components/Display'
import Keyboard from '../components/Keyboard'

import pokemon from './examples/pokemon.json'


export default function Game() {
    return (
        <Fragment>
            <Display enemy={pokemon[0]} player={pokemon[1]} />
            <Keyboard playerMovement={pokemon[1].movements} />
        </Fragment>
    )
}
