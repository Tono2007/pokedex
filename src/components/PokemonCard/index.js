import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getPokemon } from '../../services/pokemon';

function PokemonCard({ pokemonIdName }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const res = await getPokemon(pokemonIdName);
        const pokemonData = res.data;
        // console.log(res);
        setPokemon(pokemonData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemon();
  }, []);

  if (!pokemon) return <h1>sdfds</h1>;

  return (
    <article className="bg-red p-10">
      {pokemonIdName} {pokemon.id}
      <Image
        src={pokemon.sprites.back_default}
        alt="pokemon back"
        width="100"
        height="100"
      />
    </article>
  );
}

export default PokemonCard;
