import React, { useEffect, useState } from 'react';
import { pokeApiFetchByUrl } from '../utils/pokeApiFetchByUrl';

export default function PokemonCard({ pokemon, setPlayerChoice, setEnemyChoice, playerChoice, enemyChoice  }) {
    const [pokemonInfo, setPokemonInfo] = useState({});

    useEffect(async()=> {
        let poke = await pokeApiFetchByUrl(pokemon.url);
        setPokemonInfo(poke);
    }, []);

    if(Object.values(pokemonInfo).length == 0){
        return null
    }

    function handleChoice() {
        if(Object.values(playerChoice) <= 0){
            setPlayerChoice(pokemonInfo)
        }else if(Object.values(enemyChoice) <= 0){
            setEnemyChoice(pokemonInfo)
        }
    }

    return(
        <div className='flex bg-green-500 justify-between px-2 border-2 border-stone-700 cursor-pointer hover:bg-green-600' onClick={()=>handleChoice()}>
            <div className='flex flex-col w-2/4 text-center justify-around'>
                <p className='font-medium'>{pokemonInfo.name}</p>
                <p className='ml-2 bg-gray-400 w-max px-2'>{pokemonInfo.types[0].type.name}</p>
            </div>
            
            <img className='w-2/4' src={pokemonInfo.sprites.front_default} />
        </div>
    );
}
