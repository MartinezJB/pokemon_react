import React, { useEffect, useState } from 'react';

export default function PokemonCard({pokemon}) {
    const [pokemonInfo, setPokemonInfo] = useState({});

    useEffect(async()=> {
        let response = await fetch(pokemon.url);
        let api = await response.json(); 
        setPokemonInfo(api);
    }, []);

    if(Object.values(pokemonInfo).length == 0){
        // console.log("vacio");
        return null
    }

    return(
        <div className='flex bg-green-500 justify-between px-2 border-2 border-stone-700 cursor-pointer hover:bg-green-600'>
            <div className='flex flex-col w-2/4 text-center justify-around'>
                {/* <p className=''>{pokemonInfo.id}</p> */}
                <p className='font-medium'>{pokemonInfo.name}</p>
                <p className='ml-2 bg-gray-400 w-max px-2'>{pokemonInfo.types[0].type.name}</p>
            </div>
            
            <img className='w-2/4' src={pokemonInfo.sprites.front_default} />
            
        </div>
    );
}
