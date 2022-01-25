import React from 'react';

export default function CoveredButtons({ covered }) {
    if(!covered) {
        return null
    }
    
    return (
        <div className="absolute bottom-0 w-full h-2/5 bg-stone-800/75" >
            
        </div>
    )
}
