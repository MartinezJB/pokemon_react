import React from 'react';

export default function TextDisplay({ mensaje }) {
    return (
        <div className="relative table w-full px-6 z-30 bg-slate-200 border-slate-900 border-4 rounded-lg shadow-[1rem_0_rgb(15,23,42),_-1rem_0_rgb(15,23,42)] h-1/5 lg:h-[10%] lg:order-first" id="mensaje">
            <p className="text-left md:text-center table-cell align-middle md:text-xl" id="text">{mensaje}</p>
        </div>
    )
}
