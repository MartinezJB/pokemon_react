import { pokeApiFetchByUrl } from '../../utils/pokeApiFetchByUrl';
import { Type } from './pokemon_types'

export async function typeAdapter(_type) {
    let type = await pokeApiFetchByUrl(_type.url)
    return new Type(
        type.name,
        type.damage_relations.double_damage_to.map(e=>e.name),
        type.damage_relations.double_damage_from.map(e=>e.name)
        )
}