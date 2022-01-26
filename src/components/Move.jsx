import React from "react";

export default function Move({ move, setTurnDone, setMove }) {
  
  return (
    <div className="px-2 py-1 bg-stone-200 rounded-xl border-2 border-slate-400 shadow-lg cursor-pointer hover:scale-105 transition-transform lg:flex lg:justify-between lg:px-4" onClick={()=>{setMove(move); setTurnDone(true)}}>

        <h3 className="font-medium text-lg">{move.name}</h3>
        
        <div className="flex justify-around items-end lg:items-center">
            <p className="px-2 py-1 bg-stone-400 lg:text-sm lg:mr-2">{move.type._name}</p>
            <div className="flex items-baseline">
              <label className="text-xs mr-1" htmlFor="ppCount">PP</label>
              <p className="text-sm" id="ppCount">{move.actual_pp}/{move.max_pp}</p>
            </div>
        </div>
    </div>
  );
}
