export async function pokeApiFetchByUrl(url) {
    let response = await fetch(url);
    let pokemon = await response.json();
    return pokemon;
}