import axios from './config';

export function getPokemons({ limit, offset }) {
  return axios.get(`/pokemon/?limit=${limit}&offset=${offset}`);
}
// Id || Name
export function getPokemon(pokemon) {
  return axios.get(`/pokemon/${pokemon}`);
}
