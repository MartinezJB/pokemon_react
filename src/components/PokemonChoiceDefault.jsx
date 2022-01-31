import React from "react";
import { pokeApiFetchById } from "../utils/pokeApiFetchById";

export default function PokemonChoiceDefault({setChoice}) {
    // const pokeAdaptado = usePokeApiAdapter(pokeChoice)
    // console.log(pokeAdaptado);
    async function selectRandomChoice() {
        let randomId = Math.floor(Math.random() * 898); //898 es la id maxima que permite la api
        let pokeChoice = await pokeApiFetchById(randomId)
        await setChoice(pokeChoice)
    };

    return(
    <div className="bg-stone-400">
      <p>Elige un pokemon</p>
      <img className='h-24' src="./pokemon_select_default.png" />
      <button onClick={()=>selectRandomChoice()}>Random</button>
    </div>
    )
  }