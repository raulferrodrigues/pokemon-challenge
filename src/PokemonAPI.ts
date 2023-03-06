

function getPokemon(name: string) {
  const url = 'https://pokeapi.co/api/v2/pokemon/' + name

  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
}

export { getPokemon }