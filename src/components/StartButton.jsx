import React from 'react';

function CoveredButton() {
    return <div className='bg-stone-500'>soy un boton esondido</div>
}

export default function StartButton({playerChoice, enemyChoice}) {
  if(Object.values(playerChoice) == 0 || Object.values(enemyChoice) == 0){
      return <CoveredButton />
  }
  
  return <button className='bg-green-400'>
      start
  </button>;
}
