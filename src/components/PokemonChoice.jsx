import React, { Fragment } from 'react';

export default function PokemonChoice({choice, setChoice}) {
  
  return (
      <div id="player_choice">
        <p>{choice.name}</p>
        <button onClick={()=>setChoice({})}>Quitar</button>
      </div>
  );
}
