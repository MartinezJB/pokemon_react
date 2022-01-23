import React from 'react';
//import styles from './styles/EnemyDisplay.module.css';
// TODO: hay que cambiar los width para que coincidan todos con columna 12. el module ya no sirve
export default function EnemyDisplay({ enemy }) {
    let { name, lvl, max_life, actual_life, urlImg } = enemy;

    return (
        <div className="relative flex flex-row-reverse top-3 items-start justify-around">
            {/* Image */}
            <div className="w-5/12">
                {/* Sprite */}
                <img className="relative w-full z-10 animate-bounce" src={urlImg} alt={name} /> {/* translate-y-[-15%] agregar esta clase si se desactivan las animaciones*/}
                {/* Platform */}
                <div className="absolute bottom-0 w-5/12 h-5/6 scale-y-50 bg-slate-200 border-slate-400 border-4 rounded-full "></div>
            </div>

            {/* Info */}
            <div className="w-5/12 bg-stone-500 px-2 py-1 border-slate-800 border-2 rounded-r-lg shadow-inner">
                <div className="flex justify-between text-lg">
                    {/* Name */}
                    <p>{name}</p>
                    {/* Lvl */}
                    <p>
                        <span className="font-serif text-sm">lvl </span> {lvl}
                    </p>
                </div>

                <div className="flex justify-end items-center">
                    <label className="mr-2 text-sm" htmlFor="enemyHealt">HP</label>
                    <progress className="w-7/12 h-3 border-slate-800 border-2 rounded" id="enemyHealt" min="0" max={max_life} value={actual_life}></progress>
                </div>
            </div>

        </div>
    )
}
