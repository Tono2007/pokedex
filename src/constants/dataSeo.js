import {
  HOME_PAGE,
  POKEMONS_PAGE,
  GENERATIONS_PAGE,
  TYPES_PAGE,
  FAVORITES_PAGE,
  POKEMON_PAGE,
} from '@constants/routes';

const DATA_SEO = {
  [HOME_PAGE]: {
    title: 'Pokemon | Pokedex APP',
    description: 'Applicación para buscar y encontrar pokemons',
  },
  [POKEMONS_PAGE]: {
    title: 'Pokedex',
    description: 'Encuentra pokemons',
  },
  [POKEMON_PAGE]: {
    title: 'Perfil pokemon',
    description: 'Encuentra detalles de tu pokemon',
  },
  [GENERATIONS_PAGE]: {
    title: 'Generaciones de pokemones',
    description: 'Encuentra detalles de cada generación de pokemones',
  },
  [TYPES_PAGE]: {
    title: 'Tipos de pokemones',
    description: 'Encuentra detalles de cada tipo de pokemon',
  },
  [FAVORITES_PAGE]: {
    title: 'Tus Pokemones Favoritos',
    description: 'Encuentra tus pokemones favoritos',
  },
};

export default DATA_SEO;
