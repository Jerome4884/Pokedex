
// declaration d'une fonction avec un parametre afin de pouvoir se reservir de la fonction avec d'autres cas d'utilisations
function displayPokemon(startIndex) {
    // on boucle sur startIndex jusqu'a qu'il soit egal a 15
    for(let i = startIndex; i <= startIndex + 14; i++){
        //on dynamise l'url afin d'avoir l'index du pokemon => Template litteral cours du 20/04 slide 18
     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {
            // Insert your code here


            console.log(data);
            document.querySelector('#pokemonContainer').innerHTML += `
            <div class="pokemon electric">
                <div class="imgContainer">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="${data.name}" />
                </div>
                <div class="info">
                    <h3 class="name">${data.name}</h3>
                    <span class="type">Type: <span>${data.types[0].type.name}</span>
                </div>
            </div>
        `            
            // document.querySelector('.imgContainer > img').src = data.sprites.front_default;
            // document.querySelector('.name').textContent = data.name;
            //document.querySelector('.type').textContent = data;
            return data;
            
        });
    }  
}
displayPokemon(1);

// declaration variable a l'exterieur de la fonction evenbment pour pas qu'elle se reinitialise a chaque fois qu'on click sur le bouton next
let count = 0;
document.querySelector('#next').addEventListener('click', function() {
// au 1er click, 15 pokemon s'affiches
displayPokemon(count+16);
// puis a chaque click 1( pokemons suivants s'affiche)
count+=15;
});