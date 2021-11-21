import React from 'react'
import styles from './styles/CoveredButtons.module.css'


export default function CoveredButtons({ covered }) {
    if(!covered) {
        return null
    }
    
    return (
        <div className={styles.coveredButtons}>
            
        </div>
    )
}
