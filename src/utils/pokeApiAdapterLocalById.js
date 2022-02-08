import { Pokemon } from "../hooks/game_scripts/pokemons";
import { Movement } from "../hooks/game_scripts/movements";
import { typeAdapter } from "../hooks/game_scripts/typeAdapter";
import { pokeApiFetchById } from "./pokeApiFetchById";
import { useMove } from "../hooks/useMove"

export async function pokeApiAdapterLocalById(pokeApiId) {
    let pokeApi = await pokeApiFetchById(pokeApiId);
    //console.log(pokeApi);
    let type = await typeAdapter(pokeApi.types[0].type);
    //console.log(type);

    let movements = [
        await movementsApiAdapterLocal(pokeApi.moves[0].move),
        await movementsApiAdapterLocal(pokeApi.moves[1].move),
        await movementsApiAdapterLocal(pokeApi.moves[2].move),
        await movementsApiAdapterLocal(pokeApi.moves[3].move)
    ];
    // console.log(movements);
    return new Pokemon(
        pokeApi.name,
        type,
        pokeApi.stats[0].base_stat,
        pokeApi.stats[1].base_stat,
        pokeApi.stats[2].base_stat,
        movements,
        pokeApi.sprites.front_default,
        pokeApi.sprites.back_default,
        59 // cambiar por un nivel mas natural (pensar como)
    );
}

async function movementsApiAdapterLocal(moveApi) {
    let response = await fetch(moveApi.url)
    let move = await response.json()
    return new Movement(
            move.name,
            move.type.name,
            move.power === null ? 0 : move.power,
            move.pp
        )
}