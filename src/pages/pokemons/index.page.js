import { useState } from 'react';
import PropTypes from 'prop-types';

import InfiniteScroll from 'react-infinite-scroll-component';
import PokemonCard from '@components/PokemonCard';

import { PAGE_LIMIT } from '@constants/data';
import { POKEMONS_PAGE } from '@constants/routes';
import dataSeo from '@constants/dataSeo';

import GenerateHeadPageSEO from '@helpers/seoPerPage';

import { getPokemons } from '@services/pokemon';

function Pokemons(props) {
  const { data } = props;
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const fetchPokemons = async () => {
    try {
      const res = await getPokemons({
        limit: PAGE_LIMIT,
        offset: PAGE_LIMIT * page,
      });
      console.log(res);
      const { results } = res.data;
      if (results.length === 0) {
        setHasMore(false);
        return;
      }
      setPokemons([...pokemons, ...results]);
      setPage((newPage) => newPage + 1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="container">
      <GenerateHeadPageSEO
        title={dataSeo[POKEMONS_PAGE].title}
        descriptionPage={dataSeo[POKEMONS_PAGE].description}
      />
      {/* {pokemons.length > 0 && (
       
      )} */}

      <header className="mt-10">
        <h1 className="text-5xl font-bold ">Pokedex</h1>
        <h2 className="text-base text-textSecondary">
          Aqui podras encontrar todos lo pokemones
        </h2>
      </header>

      <InfiniteScroll
        className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3
         lg:grid-cols-4  xl:grid-cols-4  gap-7 mb-5  pt-10"
        dataLength={pokemons.length}
        next={fetchPokemons}
        hasMore={hasMore}
        loader={
          <div
            className="text-center w-full 
          col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 
          col-start-1"
          >
            <span className="text-center text-base ">
              Buscando Pokemones...
            </span>
          </div>
        }
        endMessage={
          <div
            className="text-center w-full  col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 
          col-start-1"
          >
            <span className="text-center text-base ">No hay mas pokemones</span>
          </div>
        }
      >
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonIdName={pokemon.name} />
        ))}
      </InfiniteScroll>
    </section>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await getPokemons({ limit: PAGE_LIMIT, offset: '0' });
    const { results } = res.data;
    return {
      props: {
        data: results,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      data: [],
    },
  };
};

Pokemons.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired }),
  ),
};
Pokemons.defaultProps = {
  data: [],
};

export default Pokemons;
