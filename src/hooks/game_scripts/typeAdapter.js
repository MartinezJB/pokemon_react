import { pokemonTypes } from './pokemon_types'

export function typeAdapter(type) {
    const finalType = pokemonTypes.filter(
        typeDis => typeDis.name === type.toLowerCase()
    )[0];

    return finalType
}