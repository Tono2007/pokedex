import axios from './config';

export function getPokemons({ limit, offset }) {
  return axios.get(`/pokemon/?limit=${limit}&offset=${offset}`);
}
// Id || Name
export function getPokemon(pokemon) {
  return axios.get(`/pokemon/${pokemon}`);
}
export function getPokemonTypes() {
  return axios.get(`/type?limit=1000&offset=0`);
}

export function getTypeDetails(type) {
  return axios.get(`/type/${type}`);
}

export function getGenerations() {
  return axios.get(`/generation`);
}
export function getGenerationDetails(generation) {
  return axios.get(`/generation/${generation}`);
}
