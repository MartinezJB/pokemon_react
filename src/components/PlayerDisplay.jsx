import React from 'react';
import styles from './styles/PlayerDisplay.module.css';

export default function PlayerDisplay({ player }) {

    return ( 
        <div className="relative flex items-center justify-between">

            <div className="w-5/12 scale-125">
                <img className="relative w-full z-10 animate-bounce" src={player.urlImg} alt={player.name} />
                <div className="absolute bottom-[-15%] w-full h-4/6 bg-slate-200 border-slate-400 border-4 rounded-[100%]"></div>
            </div>

            <div className="w-6/12 bg-stone-500 px-2 py-1 border-slate-800 border-2 rounded-l-lg shadow-border z-20">
                <div className="flex justify-between text-lg">
                    {/* Name */}
                    <p>{player.name}</p>
                    {/* lvl */}
                    <p>
                        <span className="font-serif text-sm">lvl </span> {player.lvl}
                    </p>
                </div>

                <div className="flex justify-end items-center flex-wrap">
                    <label className="mr-2 text-sm" id={"hp"} htmlFor="barraVida">HP</label>
                    <progress className="w-7/12 h-3 border-slate-800 border-2 rounded" id="barraVida" min="0" max={player.max_life} value={player.actual_life}></progress>
                    <label className="font-serif text-sm" id="totalVida" htmlFor="barraVida">{player.actual_life}/{player.max_life}</label>
                </div>
            </div>
        </div>
    )
}
