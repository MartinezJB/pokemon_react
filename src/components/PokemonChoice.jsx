import React from 'react';
import PokemonChoiceDefault from './PokemonChoiceDefault';


export default function PokemonChoice({choice, setChoice}) {
  
  if(Object.values(choice).length === 0){
    return <PokemonChoiceDefault setChoice={setChoice} />
}
  return (
      <div className='bg-stone-200 w-1/4 text-center rounded'>
        <p>{choice.name}</p>
        <img className='h-20 mx-auto' src={choice.sprites.front_default} alt={choice.name} />
        <button onClick={()=>setChoice({})}>Quitar</button>
      </div>
  );
}
