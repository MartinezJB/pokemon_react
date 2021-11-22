import { useState } from "react";
import { Pokemon } from "./game_scripts/pokemons";
import { typeAdapter } from "./game_scripts/typeAdapter";

export function usePokemon(name, _type, hp, damagePoints, defensePoints, movements, image, lvl = 1) {
    const type = typeAdapter(_type)
    const [poke] = useState(new Pokemon(name, type, hp, damagePoints, defensePoints, movements, image, lvl))
 
    return poke
}