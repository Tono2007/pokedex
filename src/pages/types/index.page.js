import PropTypes from 'prop-types';

import PokemonCard from '@components/PokemonCard';

import { getPokemonTypes, getTypeDetails } from '@services/pokemon';

import { TYPES_PAGE } from '@constants/routes';
import dataSeo from '@constants/dataSeo';
import { RELATION_TITLES } from '@constants/data';

import GenerateHeadPageSEO from '@helpers/seoPerPage';
import PageHeader from '@components/PageHeader';

function Types(props) {
  console.log(props);
  const { typesDetails } = props;
  return (
    <section className="container">
      <GenerateHeadPageSEO
        title={dataSeo[TYPES_PAGE].title}
        descriptionPage={dataSeo[TYPES_PAGE].description}
      />
      {/* {pokemons.length > 0 && (
       
      )} */}

      <PageHeader
        title="Tipos"
        subtitle="Aqui podras encontrar todos lo pokemones"
      />
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
        className="grid grid-cols-1 md:grid-cols-2
           auto-rows-auto gap-16 mb-5  mt-10"
      >
        {typesDetails.map((type) => (
          <PokemonType key={type.name} type={type} />
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
        className={`relative bg-bgPrimary p-8 border-t-8 rounded-md w-[95%]  md:w-[90%] h-full  mx-auto 
        overflow-hidden  shadow-xl border-${type.name}
       before:content-[''] before:absolute before:w-[70%] before:aspect-square  before:rounded-full
       before:top-[-0%] before:right-[-0%] before:translate-x-[50%]  before:translate-y-[-50%]
       before:bg-gradient-to-bl from-${type.name}/50 before:opacity-50`}
      >
        <div
          className={` relative
       flex flex-col gap-5 `}
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
                <div key={`${relation} ${type.name}`} className="p-1 bordfer-2">
                  <div className="flex gap-2 flex-wrap">
                    <p className="text-sm">{RELATION_TITLES[relation]} -</p>
                    {relationTypes?.map((relationType) => (
                      <span
                        key={`${relation} ${type.name} ${relationType.name}`}
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
      </div>
    </article>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await getPokemonTypes();
    const { results } = res.data;
    const typesPromises = results.map((type) => {
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

const propTypeDamageRelations = PropTypes.arrayOf(
  PropTypes.shape({ name: PropTypes.string }),
);
const propTypePokemonType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  generation: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  names: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      language: PropTypes.shape({ name: PropTypes.string }),
    }),
  ).isRequired,
  damage_relations: PropTypes.shape({
    double_damage_from: propTypeDamageRelations,
    double_damage_to: propTypeDamageRelations,
    half_damage_from: propTypeDamageRelations,
    half_damage_to: propTypeDamageRelations,
    no_damage_from: propTypeDamageRelations,
    no_damage_to: propTypeDamageRelations,
  }),
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      pokemon: PropTypes.shape({ name: PropTypes.string.isRequired })
        .isRequired,
    }),
  ),
});

Types.propTypes = {
  typesDetails: PropTypes.arrayOf(propTypePokemonType),
};
Types.defaultProps = {
  typesDetails: [],
};
PokemonType.propTypes = {
  type: propTypePokemonType.isRequired,
};

/* Types.propTypes = {
  type: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  generation: PropTypes.string.isRequired,
};typesDetails */

export default Types;
