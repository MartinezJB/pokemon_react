import React from "react";
// import styles from './styles/Move.module.css';

export default function Move({ move, setTurnDone, setMove }) {
  
  return (
    <div className="px-2 py-1 bg-stone-200 rounded-xl border-2 border-slate-400 shadow-lg cursor-pointer hover:scale-105 transition-transform" onClick={()=>{setMove(move); setTurnDone(true)}}>

        <h3 className="mb-2 font-medium">{move.name}</h3>
        
        <div className="flex justify-around items-end">
            <p className="px-2 py-1 bg-stone-400">{move.type._name}</p>
            <div className="flex items-baseline">
              <label className="text-xs mr-1" htmlFor="ppCount">PP</label>
              <p className="text-sm" id="ppCount">{move.actual_pp}/{move.max_pp}</p>
            </div>
        </div>
    </div>
  );
}
