import React from 'react';
import PokemonCard from './PokemonCard';

import pokemon_select from "../pages/examples/pokemon_select.json";


export default function SelectorDisplay() {
    let pokemonApi = pokemon_select.results

    return (
      
        <ul className='w-max mx-auto h-2/6 self-center overflow-auto border-2 border-stone-700'>
            {
                pokemonApi.map((e)=>(
                    <li key={e.name}>
                        <PokemonCard pokemon={e} />
                    </li>
                ))
            }
        </ul>
      
  );
}
