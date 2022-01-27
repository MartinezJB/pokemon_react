import React from 'react';
import EnemyDisplay from './EnemyDisplay';
import PlayerDisplay from './PlayerDisplay';
import TextDisplay from './TextDisplay';


export default function Display({ enemy, player, message, playerAttacking, enemyAttacking }) {
    return (
        <div className="bg-gradient-to-b from-sky-700 via-green-500 to-green-700 h-3/5 lg:h-[90%] flex flex-col">
            <EnemyDisplay enemy={enemy} enemyAttacking={enemyAttacking} />
            <PlayerDisplay player={player} playerAttacking={playerAttacking} />
            <TextDisplay mensaje={message} />
        </div>
    )
}
