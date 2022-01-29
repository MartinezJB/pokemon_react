import React, { useEffect, useState } from 'react';

export default function EnemyDisplay({ enemy, enemyAttacking }) {
    const [enemyAnimateAttack, setEnemyAnimateAttack] = useState("");

    useEffect(()=>{
        setEnemyAnimateAttack(enemyAttacking ? " animate-attack-enem" : "")
    },[enemyAttacking])
    
    return (
        <div className="relative flex flex-row-reverse top-3 items-start justify-between h-2/5">
            {/* Image */}
            <div className="w-5/12 sm:w-4/12 md:w-3/12 scale-90 mx-auto lg:mt-8 lg:mr-[10%]">
                {/* Sprite */}
                <img className={"relative w-full z-10 animate-bounce" + enemyAnimateAttack} src={enemy.urlImgFront} alt={enemy.name} />
                {/* Platform */}
                <div className="absolute bottom-0 w-full h-3/6 bg-slate-200 border-slate-400 border-4 rounded-[100%]"></div>
            </div>
            {/* Info */}
            <div className="w-6/12 md:w-5/12 lg:w-3/12 bg-stone-500 px-2 py-1 border-slate-800 border-2 rounded-r-lg shadow-border shadow-stone-300 z-10 lg:absolute lg:top-0 lg:right-0 lg:rounded-none lg:rounded-l-lg">
                <div className="flex justify-between text-lg md:text-xl">
                    {/* Name */}
                    <p>{enemy.name}</p>
                    {/* Lvl */}
                    <p>
                        <span className="font-serif text-sm">lvl </span> {enemy.lvl}
                    </p>
                </div>

                <div className="flex justify-end items-center">
                    <label className="mr-2 text-sm" htmlFor="enemyHealt">HP</label>
                    <progress className="w-7/12 sm:w-8/12 md:w-9/12 h-3 border-slate-800 border-2 rounded" id="enemyHealt" min="0" max={enemy.max_life} value={enemy.actual_life}></progress>
                </div>
            </div>

        </div>
    )
}
