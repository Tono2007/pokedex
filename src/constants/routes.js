export const HOME_PAGE = 'homePage';
export const POKEMONS_PAGE = 'pokemonsPage';
export const GENERATIONS_PAGE = 'generationsPage';
export const TYPES_PAGE = 'TypesPage';
export const FAVORITES_PAGE = 'favoritesPage';
export const POKEMON_PAGE = 'pokemonPage';

export const ROUTES = {
  [HOME_PAGE]: { path: '/', name: 'Inicio', page: HOME_PAGE },
  [POKEMONS_PAGE]: { path: '/pokemons', name: 'Pokedex', page: POKEMONS_PAGE },
  [GENERATIONS_PAGE]: {
    path: '/generations',
    name: 'Generaciones',
    page: GENERATIONS_PAGE,
  },
  [TYPES_PAGE]: { path: '/types', name: 'Tipos', page: TYPES_PAGE },
  [FAVORITES_PAGE]: {
    path: '/favorites',
    name: 'Favoritos',
    page: FAVORITES_PAGE,
  },
  [POKEMON_PAGE]: { path: '/pokemon', name: 'Pokemon', page: POKEMON_PAGE },
};

export default ROUTES;
