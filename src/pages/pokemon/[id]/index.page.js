import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {
  BsPeaceFill,
  BsFillDiagram3Fill,
  BsFillStarFill,
} from 'react-icons/bs';
import {
  GiRank3,
  GiHeartPlus,
  GiCheckedShield,
  GiBroadsword,
  GiCrossedSwords,
  GiEdgedShield,
  GiRunningNinja,
  GiMineExplosion,
} from 'react-icons/gi';
import Button from '@components/Button';
import { FAVORITES_KEY } from '../../../constants/data';
import { getPokemon, getPokemonSpecieDetail } from '../../../services/pokemon';
import {
  padNumber,
  capitalize,
  getDataLocal,
  addLocalFavorite,
  setLocalFavorites,
} from '../../../helpers';

import dataSeo from '../../../constants/dataSeo';
import { POKEMON_PAGE } from '../../../constants/routes';
import GenerateHeadPageSEO from '../../../helpers/seoPerPage';
import pokeball2 from '../../../../public/assets/pokeball2.svg';

function Pokemon({ data: pokemon, description }) {
  console.log(pokemon, description);
  /* const [isFavorite, setIsFavorite] = useState(() =>
    Boolean(
      getDataLocal(FAVORITES_KEY).find((pokeId) => pokeId === pokemon.id),
    ),
  ); */
  const [favorites, setFavorites] = useState();
  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => {
    setFavorites(getDataLocal(FAVORITES_KEY) || []);
  }, []);

  /*   const isFavorite = Boolean(favorites.find((pokeId) => pokeId === pokemon.id)); */
  useEffect(() => {
    if (favorites) {
      setLocalFavorites(favorites);
      setIsFavorite(Boolean(favorites.find((pokeId) => pokeId === pokemon.id)));
    }
  }, [favorites, pokemon.id]);

  const addToFavorites = () => {
    console.log('add');
    setFavorites((actualFavorites) => [...actualFavorites, pokemon.id]);
  };
  const deleteFromFavorites = () => {
    const newFavorites = favorites.filter(
      (favorite) => favorite !== pokemon.id,
    );
    setFavorites(newFavorites);
  };

  return (
    <div
      className={`bg-${pokemon?.types[0]?.type?.name}/80 
       min-h-screen flex flex-col gap-16
       overflow-hidden   

       `}
    >
      <GenerateHeadPageSEO
        title={`${dataSeo[POKEMON_PAGE].title} | ${pokemon.name}`}
        descriptionPage={dataSeo[POKEMON_PAGE].description}
      />
      <header
        className={`relative       

         `}
      >
        <h2
          className=" absolute -top-5 right-12 text-transparent text-stroke-white text-[7rem]
            font-extrabold opacity-70 capitalize"
        >
          {pokemon?.name}
        </h2>
        <div
          className={`relative flex justify-around content-center   items-center
           container w-[100%]  mt-20
           after:content-[''] after:absolute after:w-[50%] after:aspect-square  after:rounded-full
      after:top-0 after:right-0 after:translate-x-[70%]  after:translate-y-[-50%]
     after:bg-gradient-to-tr from-${
       pokemon?.types[0].type.name || 'grass'
     }/100 via-bgSecondary/30 to-bgSecondary/30 after:opacity-100 
     before:content-[''] before:absolute before:w-[50%] before:aspect-square  before:rounded-full
     before:top-[-50%] before:right-[-0%] before:translate-x-[0%]  before:translate-y-[-50%]
     before:bg-gradient-to-tr from-${
       pokemon?.types[0].type.name || 'grass'
     }/100 via-bgSecondary/30 to-bgSecondary/30 before:opacity-100 
     
         `}
        >
          <div
            className="absolute top-[-80%] left-[0] h-[50%] w-auto 
                     translate-y-[-50%] translate-x-[-50%]"
          >
            <Image
              src={pokeball2}
              alt="pokemon back"
              height="600px"
              width="600px"
            />
          </div>

          <div className="relative">
            <span className="text-sm font-bold">#{padNumber(pokemon?.id)}</span>
            <h1
              className="text-7xl font-bold  capitalize text-contrastText 
            drop-shadow-lg shadow-black"
            >
              {pokemon?.name}
              <span
                className={`italic text-xs font-medium pl-1 border-b-2 border-${
                  pokemon?.types[0].type.name || 'CBlue'
                }`}
              >
                {
                  description?.genera.find(
                    (flavor) => flavor.language.name === 'es',
                  )?.genus
                }
                {isFavorite ? (
                  <AiFillHeart className=" inline ml-2 text-md text-red-600" />
                ) : (
                  <AiOutlineHeart className=" inline ml-2 text-md text-red-600" />
                )}
              </span>
            </h1>

            <div className="flex flex-wrap gap-2 mt-2">
              {pokemon?.types?.map(({ type }) => (
                <span
                  key={type.name}
                  className={`py-0.5 px-1   rounded-md text-sm
                  border border-white/50
                   text-contrastText  capitalize bg-${type.name}`}
                >
                  {type.name}
                </span>
              ))}
            </div>
            {isFavorite ? (
              <Button
                color="primary"
                size="small"
                classes="mt-5"
                onClick={deleteFromFavorites}
              >
                <AiFillHeart className=" inline mr-2 text-xl text-red-600" />
                Eliminar de favoritos
              </Button>
            ) : (
              <Button
                color="primary"
                size="small"
                classes="mt-5"
                onClick={addToFavorites}
              >
                <AiOutlineHeart className=" inline mr-2 text-xl text-red-600" />
                Agregar a favoritos
              </Button>
            )}
          </div>
          <div className="relative z-10">
            <div
              className=" p-2 rounded border-l-4 border-b-4 relative border-textPrimary
           after:content-[''] after:absolute after:w-3 after:h-3 after:rounded-full
           after:top-0 after:left-0 after:bg-bgPrimary
           after:translate-x-[-65%]  after:translate-y-[-50%]
           before:content-[''] before:absolute before:w-3 before:h-3 before:rounded-full
           before:bottom-0 before:right-0 before:bg-bgPrimary
           before:translate-x-[50%]  before:translate-y-[65%]"
            >
              <p className="text-contrastText absolute -bottom-6 text-xs w-full text-center">
                Peso:{' '}
                {(pokemon.weight / 10).toLocaleString('es', {
                  style: 'unit',
                  unit: 'kilogram',
                  unitDisplay: 'short',
                })}
              </p>
              <p className="text-contrastText absolute top-20  -left-14 -rotate-90 text-xs   text-center">
                Altura:{' '}
                {(pokemon.height / 10).toLocaleString('es', {
                  minimumFractionDigits: 1,
                  style: 'unit',
                  unit: 'meter',
                  unitDisplay: 'short',
                })}
              </p>
              <Image
                src={
                  pokemon?.sprites?.other?.['official-artwork']
                    ?.front_default ||
                  pokemon?.sprites?.front_default ||
                  ''
                }
                alt="pokemon back"
                height="250px"
                width="250px"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </header>

      <Section borderColor={pokemon.types[0].type.name} classes="relative">
        <div className="flex justify-between content-center items-center my-1">
          <div>
            <h6 className="text-3xl font-extrabold capitalize mb-2">
              {pokemon?.name}
            </h6>
            <p className="w-full my-4">
              {
                description?.flavor_text_entries.find(
                  (flavor) => flavor.language.name === 'es',
                )?.flavor_text
              }
            </p>
            <p className="text-sm text-textSecondary">
              Peso:
              <span className="text-base text-textPrimary">
                {' '}
                {(pokemon.weight / 10).toLocaleString('es', {
                  style: 'unit',
                  unit: 'kilogram',
                  unitDisplay: 'short',
                })}
              </span>
            </p>
            <p className="text-sm text-textSecondary">
              Altura:
              <span className="text-base text-textPrimary">
                {' '}
                {(pokemon.height / 10).toLocaleString('es', {
                  minimumFractionDigits: 1,
                  style: 'unit',
                  unit: 'meter',
                  unitDisplay: 'short',
                })}
              </span>
            </p>
            <p className="text-sm text-textSecondary  ">
              Formas:
              {pokemon?.forms.map((form) => (
                <span
                  key={form.name}
                  className={` ml-1 capitalize
                        rounded
                        text-textPrimary text-xbases  
                     `}
                >
                  {form.name}
                </span>
              ))}
            </p>
            <p className="text-sm text-textSecondary  ">
              Orden:
              <span
                className={` ml-1 capitalize
                        rounded
                        text-textPrimary text-xbases  
                     `}
              >
                {pokemon?.order}
              </span>
            </p>
            <p className="text-sm text-textSecondary  ">
              Habilidades:
              {pokemon?.abilities.map((ability) => (
                <span
                  key={ability.ability.name}
                  className={` ml-1 capitalize
                        rounded
                        text-textPrimary text-sm
                         p-0.5 px-1 bg-${pokemon?.types[0].type.name}/30
                     `}
                >
                  {ability.ability.name}
                  <BsFillStarFill className="inline text-xs ml-1" />
                </span>
              ))}
            </p>
          </div>
          <div className="flex gap-3 justify-center content-center flex-wrap ">
            <Box
              color={pokemon?.types[0].type.name}
              title="Experiencia"
              subtitle={pokemon?.base_experience}
              variant={2}
              Icon={GiRank3}
            />
            <Box
              color={pokemon?.types[0].type.name}
              title="Especie"
              subtitle={pokemon?.species.name}
              Icon={BsPeaceFill}
            />
            <Box
              color={pokemon?.types[0].type.name}
              title="Tipo"
              subtitle={pokemon?.types[0].type.name}
              variant={2}
              Icon={BsFillDiagram3Fill}
            />
          </div>
        </div>
      </Section>
      <Section borderColor={pokemon?.types[0].type.name}>
        <h6 className="text-xl font-bold capitalize mb-4">Estadisticas Base</h6>
        <span className="text-right block">Max</span>
        {pokemon?.stats.map((stat, index) => (
          <>
            <StatBar
              key={stat.stat}
              stat={stat}
              color={pokemon?.types[0].type.name}
            />
            {index === 2 && <hr className="my-5" />}
          </>
        ))}
        <hr className="my-5" />
        <p className="text-2xl font-normal  capitalize">
          Total:
          <span className="text-2xl text-textPrimary font-medium ml-3 ">
            {pokemon.stats.reduce(
              (previousValue, currentValue) =>
                previousValue + currentValue.base_stat,
              0,
            )}
          </span>
        </p>
        <p className="text-sm font-normal text-textSecondary mt-3">
          Los rangos que se muestran son para un Pokémon de nivel 100: los
          valores máximos se basan en una naturaleza beneficiosa, 252 EV, 31 IV;
          los valores mínimos se basan en una naturaleza obstaculizadora, 0 EV,
          0 IV
        </p>
      </Section>
      <Section borderColor={pokemon?.types[0].type.name}>
        <h6 className="text-xl font-bold capitalize">Movimientos</h6>
        <p className="text-sm text-textSecondary my-5">
          Un movimiento o ataque (Move en inglés, わざ Acción en japonés) es un
          esfuerzo de poder que puede ser físico, especial, o de apoyo y que los
          Pokémon son capaces de aprender y usar a lo largo de su desarrollo,
          dependiendo principalmente de su tipo y en la mayoría de casos de su
          fisionomía.
        </p>
        <div className="flex flex-wrap gap-1 ">
          {pokemon?.moves.map((move) => (
            <span
              key={move.move.name}
              className={` capitalize
                        rounded  border border-${
                          pokemon?.types[0].type.name || 'grass'
                        }
                        text-contrastText text-sm
                         p-1 px-2 bg-${pokemon?.types[0].type.name}/100
                     `}
            >
              <GiMineExplosion className="inline text-lg mr-1" />
              {move.move.name}
            </span>
          ))}
        </div>
      </Section>
      <Section borderColor={pokemon?.types[0].type.name} classes="mb-8">
        <h6 className="text-xl font-bold capitalize">Imagenes</h6>
        <div className="w-full flex justify-center content-center flex-wrap gap-4 mt-10">
          {Object.entries(pokemon?.sprites?.other)
            .filter(([key, sprite]) => sprite?.front_default)
            .map(([key, sprite]) => (
              <PokemonImage
                key={pokemon}
                src={sprite?.front_default}
                title={key}
              />
            ))}
          {Object.entries(pokemon?.sprites)
            .filter(
              ([key, sprite]) =>
                key !== 'other' && key !== 'versions' && sprite,
            )
            .map(([key, sprite]) => (
              <PokemonImage key={pokemon} src={sprite} title={key} />
            ))}
          {Object.entries(pokemon?.sprites?.versions).map(([key, version]) =>
            Object.entries(version)
              .filter((versionF) => versionF[1].front_default)
              .map(([keyName, sprite]) => (
                <PokemonImage
                  key={keyName}
                  src={sprite?.front_default}
                  title={`${key} - ${keyName}`}
                />
              )),
          )}
        </div>
      </Section>
    </div>
  );
}

const statsValues = {
  /*  hp: { value: 255, Icon: GiHeartPlus },
  attack: { value: 255, Icon: GiHeartPlus },
  defense: { value: 255, Icon: GiHeartPlus },
  'special-attack': { value: 255, Icon: GiHeartPlus },
  'special-defense': { value: 255, Icon: GiHeartPlus },
  speed: { value: 255, Icon: GiHeartPlus }, */
  hp: { value: 274, Icon: GiHeartPlus },
  attack: { value: 229, Icon: GiBroadsword },
  defense: { value: 196, Icon: GiCheckedShield },
  'special-attack': { value: 218, Icon: GiCrossedSwords },
  'special-defense': { value: 218, Icon: GiEdgedShield },
  speed: { value: 306, Icon: GiRunningNinja },
};

function StatBar({ stat, color }) {
  const { Icon } = statsValues[stat.stat.name];

  return (
    <div className="flex justify-between flex-col sm:flex-row mt-2 gap-3 flex-wrap">
      <p className="text-base font-medium w-[30%] min-w-[180px] capitalize flex flex-nowrap items-center">
        <Icon className={`inline text-xl mr-2 text-${color}`} />
        {stat.stat.name}:
        <span className="text-sm text-textSecondary ml-2 flex-grow sm:text-right">
          {stat.base_stat}
        </span>
      </p>
      <div className="flex-grow flex flex-nowrap items-center min-w-[20%] ">
        <div className="w-full bg-gray-300   rounded-sm h-4">
          <div
            className={`bg-${color} h-4 rounded-sm flex justify-end items-center`}
            style={{
              width: `${
                (stat.base_stat * 100) / statsValues[stat.stat.name].value
              }%`,
            }}
          >
            <span
              className={`-mr-4 text-centerml-full px-2 bg-bgPrimary border-2 rounded-sm border-${color} text-md`}
            >
              {stat.base_stat}
            </span>
          </div>
        </div>
        <span className="text-[0.6rem]  font-bold ml-5">
          {statsValues[stat.stat.name].value}
        </span>
      </div>
    </div>
  );
}

function PokemonImage({ id, src, title }) {
  return (
    <div className=" block h-auto w-[20%] min-w-[200px]">
      <p className="text-xs capitalize">{capitalize(title)}</p>
      <Image
        src={src}
        alt="pokemon back"
        height="200px"
        width="200px"
        layout="responsive"
        objectFit="contain"
      />
    </div>
  );
}

function Box({ Icon, title, subtitle, color, variant = 1 }) {
  const bgColor = variant === 1 ? `bg-${color}/100` : `bg-${color}/20`;
  const iconColor = variant === 1 ? `text-contrastText` : `text-${color}`;
  const textColor = variant === 1 ? `text-contrastText` : `text-textPrimary`;

  return (
    <div
      className={`p-4 ${bgColor} rounded flex flex-col justify-center w-22
       items-center gap-3 min-w-[160px]`}
    >
      <h6 className={`text-lg font-medium ${textColor} `}>{title}</h6>
      <Icon className={`text-5xl  ${iconColor}`} />
      <p className={`text-sm font-extrabold capitalize ${textColor}`}>
        {subtitle}
      </p>
    </div>
  );
}

function Section({ children, borderColor, classes }) {
  return (
    <section
      className={`container border-l-8 border-${
        borderColor || 'grass'
      }  p-8 rounded bg-bgPrimary shadow-lg ${classes}`}
    >
      {children}
    </section>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const { id } = context.query;
    const res = await getPokemon(id);
    const { data } = res;

    const descriptionRes = await getPokemonSpecieDetail(
      data.species.url.split('/').at(-2),
    );
    return {
      props: { data, description: descriptionRes.data },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export default Pokemon;
