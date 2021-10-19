import { useState } from "react";
import { Pokemon } from "./game_scripts/pokemons"

export function usePokemon(name, type, hp, damagePoints, defensePoints, movements, image, lvl = 1) {
    const [poke, setPoke] = useState(new Pokemon(name, type, hp, damagePoints, defensePoints, movements, image, lvl))
    function nombre() {
        console.log(poke.name)
    }

    return poke
}