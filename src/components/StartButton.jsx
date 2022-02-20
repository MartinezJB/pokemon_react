import React from 'react';
import { Link } from 'react-router-dom';

function CoveredButton() {
    return <div className='w-1/3 text-center py-2 mx-auto bg-stone-500 rounded'>Choose first!</div>
}

export default function StartButton({playerChoice, enemyChoice}) {
    
  if(Object.values(playerChoice).length === 0 || Object.values(enemyChoice).length === 0){
      return <CoveredButton />
  }
  
  return <Link className='block w-1/3 text-center py-2 mx-auto bg-green-500 rounded' to={`/game/${playerChoice.id}/${enemyChoice.id}`}>
      start
  </Link>;
}
