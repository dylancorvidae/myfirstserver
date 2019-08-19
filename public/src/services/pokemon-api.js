
const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export function getPokemon(options) {  

    const page = options.page || 1;
    const search = options.search;

    const url = `${URL}?page=${page || 1}&pokemon=${search || ''}`;

    return fetch(url)
        .then(response => response.json())
        // need to fake getting a total page count,
        // pokedex api already gives this back
        .then(results => {
            console.log(results);
            return {
                count: 100 * page,
                results: results
            };
        });
}