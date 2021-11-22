import React from 'react'
import styles from './styles/CoveredButtons.module.css'


export default function CoveredButtons({ covered, setCovered, setMessage, player }) {
    if(!covered) {
        return null
    }
    
    return (
        <div className={styles.coveredButtons} onClick={()=>{setCovered(false); setMessage(`¿Qué hará ${player.name}?`)}}>
            
        </div>
    )
}
