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
        <div className='flex bg-green-500 px-2 border-2 border-stone-700 cursor-pointer justify-evenly hover:bg-green-600' onClick={()=>handleChoice()}>
            
            <img className='w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6' src={pokemonInfo.sprites.front_default} />

            <div className='flex flex-col text-center justify-center w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6'>
                <p className='font-medium'>{pokemonInfo.name}</p>
                <p className='bg-gray-400 w-max mx-auto px-2'>{pokemonInfo.types[0].type.name}</p>
            </div>

            <p className='w-1/3 text-right text-sm sm:w-1/4 md:w-1/5 lg:w-1/6'>id pdx: {pokemonInfo.id}</p>
            
        </div>
    );
}
