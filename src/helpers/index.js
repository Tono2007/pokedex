import { FAVORITES_KEY } from '@constants/data';
import { ROUTES, POKEMON_PAGE } from '@constants/routes';

export const getDataLocal = (key) => {
  try {
    const item = window.localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : '';
  } catch {
    return '';
  }
};

export const setLocalFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};
export const addLocalFavorite = (favorite) => {
  const favorites = [...getDataLocal(FAVORITES_KEY), favorite];
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const getEmptyList = (number) => {
  const array = [];
  for (let index = 0; index < number; index += 1) {
    array.push(index);
  }
  return array;
};

export function padNumber(n) {
  const s = `000${n}`;
  /* return s.substr(s.length - 4); */
  return s.slice(s.length - 4, s.length);
}

// change '-' and '_' to ' '
export function formatImageName(str) {
  return str.replace(/[-_]/g, ' ');
}

export function pokemonPath(id) {
  return `${ROUTES[POKEMON_PAGE].path}/${id}`;
  // return `/pokemon/${id}`;
}

export function getPokemonDefaultImg(sprites) {
  return (
    sprites?.other?.dream_world?.front_default ||
    sprites?.other?.['official-artwork']?.front_default ||
    sprites?.front_default ||
    ''
  );
}
