import React from 'react';
import { Link } from 'react-router-dom';

function CoveredButton() {
    return <div className='bg-stone-500'>soy un boton esondido</div>
}

export default function StartButton({playerChoice, enemyChoice}) {
    
  if(Object.values(playerChoice).length === 0 || Object.values(enemyChoice).length === 0){
      return <CoveredButton />
  }
  
  return <Link className='bg-green-400' to={`/game/${playerChoice.id}/${enemyChoice.id}`}>
      start
  </Link>;
}
