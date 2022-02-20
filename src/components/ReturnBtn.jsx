import React from 'react';
import { Link } from 'react-router-dom';

export default function ReturnBtn({setGameOver, gameOver}) {
    if(!gameOver){
        return null
    }
    const returnToSelector = ()=>{
        setGameOver(!gameOver);

    }
    return<Link className='block w-1/4 bg-stone-300 py-2 rounded-xl mx-auto' onClick={returnToSelector} to={"/"}>
        Return
        </Link>

}
