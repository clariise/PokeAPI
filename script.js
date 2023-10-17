document.querySelector("#search").addEventListener("click", getPokemon);


function CapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.toLowerCase();
}

function getPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);

fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then((response) => response.json())
.then((data) => {
    document.querySelector(".pokemonBox").innerHTML =
 `<div>
 <img 
 src="${data.sprites.other["official-artwork"].front_default}" 
 alt="${CapitalizeFirstLetter(data.name)}">
</div>

<div class="pokemoninfo ms-3">
 <h1 class= "bg-warning">${CapitalizeFirstLetter(data.name)}</h1>
 <span> Weight: ${data.weight}</span><br>
 <span> Height: ${data.height}</span><br>
 <span> Type: ${data.types[0].type.name}</span><br>
 <span> hp: ${data.stats[0].base_stat}</span><br>
 <span> Attack: ${data.stats[1].base_stat}</span><br>
 <span> Defense: ${data.stats[2].base_stat}</span><br>
</div>`;
   
})

.catch((err) => {
    alert("Pokemon not found", err);
});

e.preventDefault();
}