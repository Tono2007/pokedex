import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { GiRank3 } from 'react-icons/gi';
import { getPokemon } from '../../../services/pokemon';
import { padNumber } from '../../../helpers';

import pokeball from '../../../../public/assets/pokeball.svg';
import pokeball2 from '../../../../public/assets/pokeball2.svg';

function Pokemon({ data: pokemon }) {
  console.log(pokemon);
  return (
    <div
      className={`bg-${pokemon.types[0].type.name}/80 
       min-h-screen flex flex-col gap-20
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
                  className={`py-0.5 px-1   rounded-md text-xs
                  border border-white/50
                   text-contrastText  capitalize ${`bg-${type.name}`}`}
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
      <section
        className={`container relative border-l-8 border-${
          pokemon.types[0].type.name || 'grass'
        }  p-8 rounded bg-bgTertiary shadow-lg`}
      >
        <div className="flex justify-between content-center ">
          <h6 className="text-xl font-bold capitalize">{pokemon?.name}</h6>
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
        </div>
        <div className="flex gap-3 flex-wrap ">
          <div className="p-3 bg-red/40">
            <GiRank3 />
            dd
          </div>
        </div>
        nombre altora peso
        <br />
        <span>base exp - especie - tipo</span>
        <br />
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
                     `}
            >
              {ability.ability.name}
            </span>
          ))}
        </p>
      </section>
      <section
        className={`container border-l-8 border-${
          pokemon.types[0].type.name || 'grass'
        }  p-8 rounded bg-bgTertiary shadow-lg`}
      >
        <h6 className="text-xl font-bold capitalize">Estadisticas</h6>
      </section>
      <section
        className={`container border-l-8 border-${
          pokemon.types[0].type.name || 'grass'
        }  p-8 rounded bg-bgTertiary shadow-lg`}
      >
        <h6 className="text-xl font-bold capitalize">Imagenes</h6>
      </section>
    </div>
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
