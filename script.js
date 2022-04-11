const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();





/*const fetchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/1';
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        const pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites
        };
        pokemon['name'] = data.name;
        pokemon['id'] = data.id;
        pokemon['image'] = result.sprites['front_defualt'];
        pokemon['type'] = data.types
        .map( type => type.type.name)
        .join(', ');
        console.log(pokemon);
            
        })

        console.log();
    });
};  


fetchPokemon();*/