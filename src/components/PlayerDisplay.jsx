import React, { useEffect, useState } from 'react';

export default function PlayerDisplay({ player, playerAttacking }) {

    const [animateAttack, setAnimateAttack] = useState("");

    useEffect(()=>{
        setAnimateAttack(playerAttacking ? " animate-attack-player" : "")
    },[playerAttacking])
    
    return ( 
        <div className="relative flex items-center justify-between h-2/5">

            <div className="w-5/12 scale-125 sm:w-4/12 md:w-3/12 mx-auto lg:ml-[10%] lg:mt-[-10%]">
                <img className={"relative w-full z-10 animate-bounce" + animateAttack} src={player.urlImgBack} alt={player.name} />
                <div className="absolute bottom-[-15%] w-full h-4/6 bg-slate-200 border-slate-400 border-4 rounded-[100%]"></div>
            </div>

            <div className="w-6/12 md:w-5/12 lg:w-4/12 bg-stone-500 px-2 py-1 border-slate-800 border-2 rounded-l-lg z-20 shadow-border shadow-stone-300 lg:absolute lg:bottom-0 lg:rounded-none lg:rounded-r-lg">
                <div className="flex justify-between text-lg md:text-xl">
                    {/* Name */}
                    <p>{player.name}</p>
                    {/* lvl */}
                    <p>
                        <span className="font-serif text-sm">lvl </span> {player.lvl}
                    </p>
                </div>

                <div className="flex justify-end items-center flex-wrap">
                    <label className="mr-2 text-sm" id={"hp"} htmlFor="barraVida">HP</label>
                    <progress className="w-7/12 sm:w-8/12 md:w-9/12 h-3 border-slate-800 border-2 rounded" id="barraVida" min="0" max={player.max_life} value={player.actual_life}></progress>
                </div>
                <div className='flex justify-end'>
                    <label className="font-serif text-sm" id="totalVida" htmlFor="barraVida">{player.actual_life}/{player.max_life}</label>
                </div>
            </div>
        </div>
    )
}
