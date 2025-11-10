const searchBtn = document.getElementById('searchBtn');
const pokemonNameInput = document.getElementById('pokemonName');
const pokemonResult = document.getElementById('pokemonResult');

searchBtn.addEventListener('click', () => {
    const pokemonName = pokemonNameInput.value.toLowerCase();
    if (!pokemonName) return alert("Escribe el nombre de un Pokémon");

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) throw new Error('Pokémon no encontrado');
            return response.json();
        })
        .then(data => {
            pokemonResult.innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>
                <p>Tipo: ${data.types.map(t => t.type.name).join(', ')}</p>
            `;
        })
        .catch(err => {
            pokemonResult.innerHTML = `<p>${err.message}</p>`;
        });
});
