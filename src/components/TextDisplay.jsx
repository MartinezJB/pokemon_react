import React from 'react';
// import styles from './styles/TextDisplay.module.css'

export default function TextDisplay({ mensaje }) {
    return (
        <div className="relative table w-full px-6 h-20 z-30 bg-slate-200 border-slate-900 border-4 rounded-lg shadow-txtcontainer" id="mensaje">
            <p className="text-left table-cell align-middle" id="text">{mensaje}</p>
        </div>
    )
}
