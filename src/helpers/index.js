import { FAVORITES_KEY } from '../constants/data';

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

export const listEmpty = (number) => {
  const array = [];
  for (let index = 0; index < number; index += 1) {
    array.push(index);
  }
  return array;
};

export function padNumber(n) {
  const s = `000${n}`;
  return s.substr(s.length - 4);
}

export function capitalize(str) {
  return str.replace(/[-_]/g, ' ');
}

export function pokemonPath(id) {
  return `/pokemon/${id}`;
}

export function getPokemonDefaultImg(sprites) {
  return (
    sprites?.other?.dream_world?.front_default ||
    sprites?.other?.['official-artwork']?.front_default ||
    sprites?.front_default ||
    ''
  );
}
