import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
