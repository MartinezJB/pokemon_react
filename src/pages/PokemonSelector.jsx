import React, { useState } from 'react';
import PokemonChoice from '../components/PokemonChoice';
import SelectorDisplay from "../components/SelectorDisplay";
import StartButton from '../components/StartButton';

export default function PokemonSelector() {
    const [playerChoice, setPlayerChoice] = useState({});
    const [enemyChoice, setEnemyChoice] = useState({});

    return (
        <div className='h-screen'>
            
            <SelectorDisplay setPlayerChoice={setPlayerChoice} setEnemyChoice={setEnemyChoice} playerChoice={playerChoice} enemyChoice={enemyChoice}/>

            <PokemonChoice choice={playerChoice}setChoice={setPlayerChoice} />
            <PokemonChoice choice={enemyChoice} setChoice={setEnemyChoice}/>

            <StartButton playerChoice={playerChoice} enemyChoice={enemyChoice}/>
            
        </div>
  );
}
