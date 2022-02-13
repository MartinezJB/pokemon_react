import React from 'react';
import PlayAgainBtn from './PlayAgainBtn';

export default function CoveredButtons({ covered, setGameOver, gameOver }) {
    if(!covered) {
        return null
    }

    
    return (
        <div className="absolute bottom-0 w-full h-full bg-stone-800/75 z-10 lg:w-4/12 lg:top-[-100%] lg:p-2 lg:right-0 lg:bg-transparent" >
            <div className="hidden lg:block lg:h-10 lg:bg-stone-800/75  lg:rounded-xl lg:m-1 lg:mx-1"></div>
            <div className="hidden lg:block lg:h-10 lg:bg-stone-800/75  lg:rounded-xl lg:m-2 lg:mx-1"></div>
            <div className="hidden lg:block lg:h-10 lg:bg-stone-800/75  lg:rounded-xl lg:m-2 lg:mx-1"></div>
            <div className="hidden lg:block lg:h-10 lg:bg-stone-800/75  lg:rounded-xl lg:m-2 lg:mx-1"></div>
            <div className="hidden lg:block lg:fixed lg:w-full lg:h-[10%] lg:bg-stone-800/75 lg:bottom-0 lg:left-0"></div>
            <PlayAgainBtn setGameOver={setGameOver} gameOver={gameOver}/>
        </div>
    )
}
