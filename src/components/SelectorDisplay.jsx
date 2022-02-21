import React, { useEffect, useState, Fragment } from 'react';
import PokemonCard from './PokemonCard';
import { pokeApiFetchByUrl } from '../utils/pokeApiFetchByUrl';


export default function SelectorDisplay({ setPlayerChoice, setEnemyChoice, playerChoice, enemyChoice }) {
    let [pokeApiList, setPokeApiList] = useState([]);
    let [nextPage, setNextPage] = useState("");
    let [prevPage, setPrevPage] = useState("");

    async function changePage(url) {
        let pokes = await pokeApiFetchByUrl(url);
        setPokeApiList(pokes.results);
        setPokeApiList(pokes.results);
        setNextPage(pokes.next);
        setPrevPage(pokes.previous);
    }
    useEffect(()=>{
        changePage("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
    }, []);  

    return (
      
        <Fragment>
            
        <ul className='w-3/4 lg:w-2/4 mx-auto h-1/3 overflow-auto border-2 border-stone-700'>
            {
                pokeApiList.map((e)=>(
                    <li key={e.name}>
                        <PokemonCard
                            pokemon={e}
                            setPlayerChoice={setPlayerChoice}
                            setEnemyChoice={setEnemyChoice}
                            playerChoice={playerChoice}
                            enemyChoice={enemyChoice} />
                    </li>
                ))
            }
        </ul>
        <div className='w-3/4 mx-auto flex justify-around'>
            <button onClick={async()=>await changePage(prevPage)} disabled={prevPage === null} className='bg-yellow-300 px-2 rounded-b-lg'>Prev</button>
            <button onClick={async()=>await changePage(nextPage)} disabled={nextPage === null} className='bg-yellow-300 px-2 rounded-b-lg'>Next</button>
        </div>
        </Fragment>
      
  );
}
