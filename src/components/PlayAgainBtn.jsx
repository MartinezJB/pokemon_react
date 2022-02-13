import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayAgainBtn({setGameOver, gameOver}) {
    if(!gameOver){
        return null
    }
    const returnToSelector = ()=>{
        setGameOver(!gameOver);

    }
    return<Link className='bg-stone-300 p-2 rounded-xl' onClick={returnToSelector} to={"/"}>
        Return
        </Link>

}
