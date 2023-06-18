const PokeApi = "https://pokeapi.co/api/v2/pokemon";

const fetchData = async (apiEndPoint, pokemon) => {
    console.log("Fetching API for", pokemon);
    try {
        const response = await fetch(apiEndPoint + "/" + pokemon);
        const jsonData = await response.json();
        console.log("Finish Fetching API for Pokemon", pokemon, "\n", jsonData);
    }
    catch (e) {
        console.log("Failed to fetch", pokemon, "Error : \n", e);
    }
};

let poke = ["ditto", "pikachu", "rando", "bulbasaur"];

poke.forEach(pokemon => {
    console.log("Try to fetch data for", pokemon);
    fetchData(PokeApi, pokemon);
    console.log("Still in process fetching", pokemon);
});