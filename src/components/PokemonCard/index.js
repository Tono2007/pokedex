import Image from 'next/image';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import { getPokemon } from '../../services/pokemon';
import { padNumber } from '../../helpers';

import pokeball from '../../../public/assets/pokeball.svg';
import pokeball2 from '../../../public/assets/pokeball2.svg';

function PokemonCard({ pokemonIdName }) {
  const router = useRouter();
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

  if (!pokemon)
    return (
      <div class="w-full h-28  rounded-md mx-auto bg-gray-300 p-3">
        <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div class="flex flex-col space-y-3">
            <div class="w-36 bg-gray-400 h-6 rounded-md " />
            <div class="w-24 bg-gray-400 h-6 rounded-md " />
          </div>
          <div class="w-12 bg-gray-400 h-12 rounded-full " />
        </div>
      </div>
    );

  const pokemonTypeBg = `bg-${pokemon?.types[0].type.name}`;
  const pokemonTypeShadow = `shadow-${pokemon?.types[0].type.name}`;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`pokemon/${pokemon?.id}`);
  };

  return (
    <article className="h-auto w-full">
      <button
        onClick={handleClick}
        type="button"
        className={`  h-full
          shadow-lg     hover:-translate-y-3
      transition duration-300  
        p-4 w-full  
      rounded-lg    ${pokemonTypeShadow}  ${pokemonTypeBg} overflow-hidden`}
      >
        <div className="flex justify-between content-center relative">
          <div className="absolute top-[-100%] right-[-60%] h-40 w-auto">
            <Image
              src={pokeball2}
              alt="pokemon back"
              height="300px"
              width="300px"
            />
          </div>

          <div className="text-left w-full">
            <span className="text-sm font-bold">#{padNumber(pokemon?.id)}</span>
            <h6 className="text-xl text-contrastText font-bold w-full capitalize">
              {pokemon?.name}
            </h6>
            <div className="flex flex-wrap gap-2 mt-2">
              {pokemon?.types?.map(({ type }) => (
                <span
                  key={type.name}
                  className={`py-0.5 px-1   rounded-md text-xs
                  border border-white/50
                   text-contrastText  capitalize ${`bg-${type.name}`}`}
                >
                  {type.name}
                </span>
              ))}
            </div>
          </div>

          <Image
            src={pokemon?.sprites?.front_default || ''}
            alt="pokemon back"
            objectFit="contain"
            width="150"
            height="100"
          />
        </div>
      </button>
    </article>
  );
}

export default PokemonCard;
