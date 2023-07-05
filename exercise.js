/* Checkpoint JS
Esercizio 1
Scrivere una funzione che prenda come parametro un array di numeri
interi e restituisca la somma di tutti i numeri pari all'interno
dell'array.
Esercizio 2
Sviluppiamo un Pokédex usando l’API https://pokeapi.co.
1. Nel browser aprire l’endpoint
“https://pokeapi.co/api/v2/pokemon/” e scegliere il nome di
un pokemon
2. Tramite una chiamata GET a
“https://pokeapi.co/api/v2/pokemon/{POKEMON_NAME}” ricavare
tutte le informazioni necessarie del pokemon scelto
3. Creare una classe Pokemon con i campi necessari
4. Creare un’istanza della classe Pokemon e assegnarla ad una
costante, successivamente fare il log delle informazioni
principali del pokemon:
a) name;
b) base_experience;
c) abilities;
5. Ciclare le abilità e stampare solo quelle che hanno la
proprietà is_hidden uguale a false
6. Gestire i possibili errori della chiamata
BONUS
1. Aggiungi un metodo alla classe Pokemon per stampare le
informazioni richieste nel punto 4 */

function isEvenArray(array) {
    let counter = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            counter += array[i];
        } 
    }
    return counter;
}

const prova = [1, 2, 2, 4, 6, 3]

console.log(isEvenArray(prova))

const endpointUrl = 'https://pokeapi.co/api/v2/pokemon/charmander';

fetch(endpointUrl)
.then((response) => response.json())
.then((data) => {
    const pokemon = new Pokemon(data.abilities, data.base_experience, data.forms, data.game_indices, data.height, data.held_items, data.id, data.is_default, data.location_area_encounters, data.moves, data.name, data.order, data.past_types, data.species, data.sprites, data.stats, data.types, data.weight)
    console.log(pokemon.name);
    console.log(pokemon.base_experience);
    console.log(pokemon.abilities);
    
    const prop = pokemon.abilities;
    console.log(prop);
    const filtered = prop.filter((el) => el.is_hidden === false);
    console.log(filtered);
    
    
})
.catch((err) => console.log(err))


class Pokemon {
    constructor(abilities, base_experience, forms, game_indices, height, held_items, id, is_default, location_area_encounters, moves, name, order, past_types, species, sprites, stats, types, weight ) {
        this.abilities = abilities;
        this.base_experience = base_experience;
        this.forms = forms;
        this.game_indices = game_indices; 
        this.height = height;
        this.held_items = held_items;
        this.id = id;
        this.is_default = is_default;
        this.location_area_encounters = location_area_encounters;
        this.moves = moves;
        this.name = name;
        this.order = order;
        this.past_types = past_types;
        this.species = species;
        this.sprites = sprites;
        this.stats = stats;
        this.types = types;
        this.weight = weight;
    }

    printInfo() {
        console.log(this.name, this.base_experience, this.abilities);
    }
}

const pokemon = new Pokemon()