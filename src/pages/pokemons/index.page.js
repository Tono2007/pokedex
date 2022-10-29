import { useState, useEffect } from 'react';
import PokemonCard from '@components/PokemonCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import GenerateHeadPageSEO from '../../helpers/seoPerPage';
import { getPokemons } from '../../services/pokemon';
import { PAGE_LIMIT } from '../../constants/data';

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
        title="Pokemones"
        descriptionPage="Listado de pokemones"
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
        className="grid grid-cols-4 auto-rows-auto gap-7 mb-5  pt-10"
        dataLength={pokemons.length}
        next={fetchPokemons}
        hasMore={hasMore}
        loader={
          <div className="text-center w-full col-span-5">
            <span className="text-center text-base ">
              Buscando Pokemones...
            </span>
          </div>
        }
        endMessage={
          <center>
            <b>No hay mas instructores registrados</b>
          </center>
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

export default Pokemons;
