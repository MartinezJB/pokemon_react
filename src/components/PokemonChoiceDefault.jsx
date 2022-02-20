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
    <div className="bg-stone-400 w-1/4 text-center rounded">
      <p>Choose</p>
      <img className='h-20 mx-auto' src="./pokemon_select_default.png" alt="default" />
      <button onClick={()=>selectRandomChoice()}>Random</button>
    </div>
    )
  }