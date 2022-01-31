import React, { Fragment } from 'react';
import PokemonChoiceDefault from './PokemonChoiceDefault';


export default function PokemonChoice({choice, setChoice}) {
  if(Object.values(choice) == 0){
    return <PokemonChoiceDefault setChoice={setChoice} />
}
  return (
      <div className='bg-green-700'>
        <p>{choice.name}</p>
        <img className='h-24' src={choice.sprites.front_default} alt={choice.name} />
        <button onClick={()=>setChoice({})}>Quitar</button>
      </div>
  );
}
