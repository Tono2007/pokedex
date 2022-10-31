import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {
  BsPeaceFill,
  BsFillDiagram3Fill,
  BsFillStarFill,
} from 'react-icons/bs';

import { GiRank3 } from 'react-icons/gi';
import { getPokemon } from '../../../services/pokemon';
import { padNumber, capitalize } from '../../../helpers';

import pokeball from '../../../../public/assets/pokeball.svg';
import pokeball2 from '../../../../public/assets/pokeball2.svg';

function Pokemon({ data: pokemon }) {
  console.log(pokemon);
  return (
    <div
      className={`bg-${pokemon.types[0].type.name}/80 
       min-h-screen flex flex-col gap-16
       overflow-hidden   

       `}
    >
      <header
        className={`relative       

         `}
      >
        <div
          className={`relative flex justify-around content-center flex-wrap items-center
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
            <h1 className="text-6xl font-extrabold  capitalize text-contrastText">
              {pokemon.name}
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
            <button type="button">
              Agregar a favoritos <AiFillHeart />
            </button>
            dsd {pokemon.types[0].type.name}
          </div>
          <div className="">
            <div
              className="   p-2 rounded border-l-4 border-b-4 relative border-textPrimary
           after:content-[''] after:absolute after:w-3 after:h-3 after:rounded-full
           after:top-0 after:left-0 after:bg-bgPrimary
           after:translate-x-[-65%]  after:translate-y-[-50%]
           before:content-[''] before:absolute before:w-3 before:h-3 before:rounded-full
           before:bottom-0 before:right-0 before:bg-bgPrimary
           before:translate-x-[50%]  before:translate-y-[65%]"
            >
              <p className="text-contrastText absolute -bottom-6 text-xs w-full text-center">
                Peso: {pokemon.weight}
              </p>
              <p className="text-contrastText absolute top-20  -left-10 -rotate-90 text-xs   text-center">
                Altura: {pokemon.height}
              </p>
              <Image
                src={
                  pokemon?.sprites?.other?.['official-artwork']
                    ?.front_default ||
                  pokemon?.sprites?.front_default ||
                  ''
                }
                alt="pokemon back"
                height="150px"
                width="150px"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </header>

      <Section borderColor={pokemon.types[0].type.name} classes="relative">
        <div className="flex justify-between content-center ">
          <div>
            <h6 className="text-3xl font-extrabold capitalize mb-4">
              {pokemon?.name}
            </h6>
            <p className="text-sm text-textSecondary">
              Altura:
              <span className="text-base text-textPrimary">
                {' '}
                {pokemon.height}
              </span>{' '}
              - Peso:
              <span className="text-base text-textPrimary">
                {' '}
                {pokemon.weight}
              </span>
            </p>
            <p className="text-sm text-textSecondary  ">
              Formas:
              {pokemon.forms.map((form) => (
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
                {pokemon.order}
              </span>
            </p>
            <p className="text-sm text-textSecondary  ">
              Habilidades:
              {pokemon.abilities.map((ability) => (
                <span
                  key={ability.ability.name}
                  className={` ml-1 capitalize
                        rounded
                        text-textPrimary text-xbases
                         p-0.5 px-1 bg-${pokemon.types[0].type.name}/30
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
              color={pokemon.types[0].type.name}
              title="Experiencia"
              subtitle={pokemon?.base_experience}
              variant={2}
              Icon={GiRank3}
            />
            <Box
              color={pokemon.types[0].type.name}
              title="Especie"
              subtitle={pokemon.species.name}
              Icon={BsPeaceFill}
            />
            <Box
              color={pokemon.types[0].type.name}
              title="Tipo"
              subtitle={pokemon.types[0].type.name}
              variant={2}
              Icon={BsFillDiagram3Fill}
            />
          </div>
        </div>
      </Section>
      <Section borderColor={pokemon.types[0].type.name}>
        <h6 className="text-xl font-bold capitalize mb-4">Estadisticas</h6>

        {pokemon.stats.map((stat) => (
          <StatBar
            key={stat.stat}
            stat={stat}
            color={pokemon.types[0].type.name}
          />
        ))}
      </Section>
      <Section borderColor={pokemon.types[0].type.name} classes="mb-8">
        <h6 className="text-xl font-bold capitalize">Imagenes</h6>
        <div className="w-full flex justify-center content-center flex-wrap gap-4 mt-6">
          {Object.entries(pokemon.sprites.other)
            .filter(([key, sprite]) => sprite.front_default)
            .map(([key, sprite]) => (
              <PokemonImage
                key={pokemon}
                src={sprite.front_default}
                title={key}
              />
            ))}
          {Object.entries(pokemon.sprites)
            .filter(
              ([key, sprite]) =>
                key !== 'other' && key !== 'versions' && sprite,
            )
            .map(([key, sprite]) => (
              <PokemonImage key={pokemon} src={sprite} title={key} />
            ))}

          {/* <PokemonImage key={pokemon} id={3} />
          <PokemonImage key={pokemon} id={3} />
          <PokemonImage key={pokemon} id={3} />
          <PokemonImage key={pokemon} id={3} />
          <PokemonImage key={pokemon} id={3} />
          <PokemonImage key={pokemon} id={3} />
          <PokemonImage key={pokemon} id={3} />
          <PokemonImage key={pokemon} id={3} />
          <PokemonImage key={pokemon} id={3} /> */}
        </div>
      </Section>
    </div>
  );
}

function StatBar({ stat, color }) {
  return (
    <div className="flex justify-between">
      <p className="text-base font-medium text-textSecondary capitalize">
        {stat.stat.name}:
        <span className="text-base text-textPrimary"> {stat.base_stat}</span>{' '}
      </p>
      <div class="w-[50%] bg-gray-300    h-3">
        <div class={`bg-${color} h-3 `} style={{ width: '45%' }} />
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
       items-center gap-2 min-w-[150px]`}
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
      }  p-8 rounded bg-bgTertiary shadow-lg ${classes}`}
    >
      {children}
    </section>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await getPokemon(id);
  const { data } = res;
  return {
    props: { data },
  };
};

export default Pokemon;
