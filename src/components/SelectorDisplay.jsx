import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

import pokemon_select from "../pages/examples/pokemon_select.json";
import { pokeApiFetchByUrl } from '../utils/pokeApiFetchByUrl';
import { Fragment } from 'react/cjs/react.development';


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
        changePage("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0")
    }, []);
    
    return (
      
        <Fragment>
        <ul className='w-max mx-auto h-2/6 overflow-auto border-2 border-stone-700'>
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
        <button onClick={async()=>await changePage(prevPage)} disabled={prevPage === null}>Prev</button>
        <button onClick={async()=>await changePage(nextPage)} disabled={nextPage === null}>Next</button>
        </Fragment>
      
  );
}
