import Image from 'next/image';
import PropTypes from 'prop-types';

import { getGenerations, getGenerationDetails } from '@services/pokemon';

import { GENERATIONS_PAGE } from '@constants/routes';
import generationsData from '@constants/generationsData';
import dataSeo from '@constants/dataSeo';

import { IMG_PATH_HOME } from '@constants/data';
import GenerateHeadPageSEO from '@helpers/seoPerPage';
import PageHeader from '@components/PageHeader';

function Generations({ generationsDetails }) {
  console.log(generationsDetails);
  return (
    <section className="container">
      <GenerateHeadPageSEO
        title={dataSeo[GENERATIONS_PAGE].title}
        descriptionPage={dataSeo[GENERATIONS_PAGE].description}
      />
      {/* {pokemons.length > 0 && (
       
      )} */}

      <PageHeader
        title="Generaciones"
        subtitle="Una generación es denominada un conjunto de videojuegos dentro de la
          franquicia Pokémon que introduce nuevas especies Pokémon. Aqui podras
          encontrar todas las generaciones."
      />
      <div className="flex flex-col gap-16 my-9">
        {generationsDetails.map((generation) => (
          <Generation key={generation.name} generation={generation} />
        ))}
      </div>
    </section>
  );
}

function Generation({ generation }) {
  return (
    <article
      className={`border-t-8 border-${
        generationsData[generation.id]?.color || 'grass'
      }  bg-bgPrimary  rounded-md shadow-xl`}
    >
      <div
        key={generation.name}
        className={`relative  p-7
  overflow-hidden   
  after:content-[''] after:absolute after:w-[100%] after:aspect-square  after:rounded-full
  after:bottom-0 after:right-0 after:translate-x-[50%]  after:translate-y-[95%]
 after:bg-gradient-to-br from-${
   generationsData[generation.id]?.color || 'grass'
 }/50 via-transparent to-transparent after:opacity-100 
 before:content-[''] before:absolute before:w-[70%] before:aspect-square  before:rounded-full
 before:top-[-0%] before:right-[-0%] before:translate-x-[50%]  before:translate-y-[-50%]
 before:bg-gradient-to-tr from-${
   generationsData[generation.id]?.color || 'grass'
 }/50 via-transparent to-transparent before:opacity-50 

 `}
      >
        <div className="flex justify-between content-center flex-wrap">
          <h5 className="text-2xl font-bold  capitalize ">
            {generation.names.find((name) => name.language.name === 'es')?.name}
          </h5>
          <h6 className="uppercase text-md text-textSecondary">
            Región Principal - {generation?.main_region?.name}
          </h6>
        </div>
        <div className="flex justify-between content-center flex-wrap">
          <div className="flex flex-col gap-2 mt-4 w-full lg:w-[50%]">
            <p className="text-textSecondary text-xs">
              {generationsData[generation.id - 1].description}
            </p>
            <div className="flex gap-2 flex-wrap">
              <p className="text-sm">Nuevos Tipos - </p>
              {generation.types?.map((type) => (
                <span
                  key={type.name}
                  className={`  capitalize
                        rounded
                        text-contrastText text-xs  font-semibold
                    bg-${type.name} p-1
                    `}
                >
                  {type.name}
                </span>
              ))}
            </div>
            <p className="text-textSecondary text-xs">
              Nuevas especies en esta generación:{' '}
              <span className="text-textPrimary font-medium text-sm">
                {' '}
                {generation?.pokemon_species?.length}
              </span>
            </p>
            <div className="flex gap-3 flex-wrap ">
              <p className="text-sm">Principales Especies -</p>
              {generation.pokemon_species?.slice(0, 10).map((species) => (
                <span
                  key={species.name}
                  className={`  capitalize
                        rounded
                        text-primaryText text-xs  font-semibold
                     `}
                >
                  {species.name}
                </span>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:w-[50%] flex justify-center lg:justify-end content-center flex-wrap">
            {generationsData[generation.id]?.pokemons.map((pokemon) => (
              <PokemonImage key={pokemon} id={pokemon} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function PokemonImage({ id }) {
  return (
    <div className=" block h-auto w-[30%] md:w-[25%] -ml-8 md:-ml-16">
      <img
        src={`${IMG_PATH_HOME}/${id}.png`}
        alt="pokemon back"
        height="200px"
        width="200px"
        layout="responsive"
        objectFit="contain"
      />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await getGenerations();
    const { results } = res.data;
    const generationsPromises = results.map((generarion) => {
      return getGenerationDetails(generarion.name);
    });
    const generationsPromisesData = await Promise.all(generationsPromises);
    const generationsDetails = generationsPromisesData.map((response) => {
      return response.data;
    });

    return {
      props: {
        data: results,
        generationsDetails,
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

const propTypeGeneration = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  main_region: PropTypes.shape({ name: PropTypes.string.isRequired }),
  names: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      language: PropTypes.shape({ name: PropTypes.string }),
    }),
  ).isRequired,
  pokemon_species: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
});

Generations.propTypes = {
  generationsDetails: PropTypes.arrayOf(propTypeGeneration).isRequired,
};
Generation.propTypes = {
  generation: propTypeGeneration.isRequired,
};
PokemonImage.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Generations;
