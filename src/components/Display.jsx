import React from 'react'
import EnemyDisplay from './EnemyDisplay'
import PlayerDisplay from './PlayerDisplay'
import TextDisplay from './TextDisplay'

export default function Display() {
    return (
        <div className="display">
            <EnemyDisplay />
            <PlayerDisplay />
            <TextDisplay />
        </div>
    )
}
