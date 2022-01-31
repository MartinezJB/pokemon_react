export async function pokeApiFetchById(id) {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    let pokemonApi = await response.json();
    return pokemonApi;
}