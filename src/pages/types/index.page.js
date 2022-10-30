import Image from 'next/image';
import PokemonCard from '@components/PokemonCard';
import { getPokemonTypes, getTypeDetails } from '../../services/pokemon';
import GenerateHeadPageSEO from '../../helpers/seoPerPage';

import pokeball from '../../../public/assets/pokeball.svg';
import pokeball2 from '../../../public/assets/pokeball2.svg';

function Types(props) {
  console.log(props);
  const { data, typesDetails } = props;
  return (
    <section className="container">
      <GenerateHeadPageSEO
        title="Pokemones"
        descriptionPage="Listado de pokemones"
      />
      {/* {pokemons.length > 0 && (
       
      )} */}

      <header className="my-10">
        <h1 className="text-5xl font-bold ">Tipos</h1>
        <h2 className="text-base text-textSecondary">
          Aqui podras encontrar todos lo pokemones
        </h2>
      </header>
      <div className="flex gap-3 flex-wrap">
        {typesDetails.map((type) => (
          <span
            key={type.id}
            className={`border-${type.name} p-1 rounded border border-b-4 text-xs`}
          >
            {type.name}
          </span>
        ))}
      </div>
      <div
        className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2
          2xl:grid-cols-3  auto-rows-auto gap-16 mb-5  mt-10"
      >
        {typesDetails.map((type) => (
          <PokemonType key={type} type={type} />
        ))}
      </div>
      {/* <div className="flex flex-col gap-10 mt-9">
        {typesDetails.map((type) => (
          <PokemonType key={type} type={type} />
        ))}
      </div> */}
    </section>
  );
}

const relationsTitles = {
  double_damage_from: 'Doble daño de',
  double_damage_to: 'Doble de daño a',
  half_damage_from: 'Mitad de daño de',
  half_damage_to: 'Mitad de daño a',
  no_damage_from: 'No recibe daño de',
  no_damage_to: 'No hace daño a',
};

function PokemonType({ type }) {
  return (
    <article className="relative h-full">
      <div
        className={`bg-${type.name} shadow-xl  p-4 rounded-md absolute w-full
         h-[50%] inset-0 top-[50%] translate-y-[-50%] `}
      >
        {/* <div className="absolute top-[50%] translate-y-[-50%]  -left-10 h-auto w-full ">
          <Image
            src={pokeball}
            alt="pokemon back"
            height="400px"
            width="400px"
            objectFit="contain"
          />
        </div> */}
      </div>
      <div
        className={`relative bg-bgPrimary p-8 border-t-8
       rounded-md w-[90%] mx-auto shadow-xl border-${type.name}
       flex flex-col gap-5 h-full`}
      >
        <div className="flex justify-between content-center flex-wrap">
          <h5 className="text-3xl font-bold  capitalize ">
            {type.names.find((name) => name.language.name === 'es')?.name} -{' '}
            {type?.name}
          </h5>
          <h6 className="uppercase text-md text-textSecondary">
            {type?.generation?.name}
          </h6>
        </div>
        <div className="flex flex-col h-full">
          {Object.entries(type?.damage_relations)?.map(
            ([relation, relationTypes]) => (
              <div key={relation} className="p-1 bordfer-2">
                <div className="flex gap-2 flex-wrap">
                  <p className="text-sm">{relationsTitles[relation]} -</p>
                  {relationTypes?.map((relationType) => (
                    <span
                      key={relationType}
                      className={`  capitalize
                        rounded
                        text-contrastText text-xs  font-semibold
                    bg-${relationType.name} p-1
                    `}
                    >
                      {relationType.name}
                    </span>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
        <hr />
        <p className="text-textSecondary text-base">
          Total de pokemones de este tipo:{' '}
          <span className="text-textPrimary font-medium text-sm">
            {' '}
            {type?.pokemon?.length}
          </span>
        </p>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-5  ">
          {type.pokemon.slice(0, 4).map((pokemon) => (
            <PokemonCard
              key={pokemon.pokemon.name}
              pokemonIdName={pokemon.pokemon.name}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await getPokemonTypes();
    const { results } = res.data;
    const typesPromises = results.map((type) => {
      console.log(type);
      return getTypeDetails(type.name);
    });
    const typesPromisesData = await Promise.all(typesPromises);
    const typesDetails = typesPromisesData.map((response) => {
      return response.data;
    });
    console.log(typesDetails);
    return {
      props: {
        data: results,
        typesDetails,
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

export default Types;
