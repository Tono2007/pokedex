import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { MdCatchingPokemon } from 'react-icons/md';
import { GiPokerHand } from 'react-icons/gi';
import {
  BsFillDiagram3Fill,
  BsFillHeartFill,
  BsFillPeaceFill,
} from 'react-icons/bs';

import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';
import SearchPokemon from '@components/SearchPokemon';
import PokemonCard from '@components/PokemonCard';
import Button from '@components/Button';

import { HOME_PAGE } from '@constants/routes';
import { IMG_PATH_HOME } from '@constants/data';
import dataSeo from '@constants/dataSeo';

import GenerateHeadPageSEO from '@helpers/seoPerPage';
import { getTransitionStyles } from '@helpers/style';

import pokeball from '@assets/pokemon-logo.svg';
import pokeball2 from '@assets/pokeball2.svg';
import pokeball1 from '@assets/pokeball.svg';

const TIMEOUT = 500;
const transitionStyles = getTransitionStyles(TIMEOUT);

export default function Home() {
  return (
    <>
      <GenerateHeadPageSEO
        title={dataSeo[HOME_PAGE].title}
        descriptionPage={dataSeo[HOME_PAGE].description}
      />
      <Hero />
      <PokemonsSection />
      <section className="bg-white py-40 container">
        <div className="container   flex flex-col gap-7 items-center text-center">
          <h1
            className="text-3xl lg:text-4xl font-bold  bg-clip-text
         text-transparent bg-gradient-to-r from-CBlue to-BURed"
          >
            Descubre y recolecta pokemones extraodinarios
          </h1>
          <h2
            className="text-3xl lg:text-4xl font-bold  bg-clip-text
         text-transparent bg-gradient-to-r from-CBlue to-BURed"
          >
            Aqui podras encontrar todos lo pokemones
          </h2>
          <p className="text-md text-textSecondary ">
            Encuentra tus fichas de pokemones ordenados
            <br />
            donde cada color representa su tipo
          </p>
          <span
            className="text-xl bg-clip-text block
         text-transparent bg-gradient-to-r from-CBlue to-BURed"
          >
            ■ ■ ■
          </span>
          <Link href="/pokemons">
            <Button component="a" color="primary" size="large" classes="mt-5">
              Ver Pokedex
            </Button>
          </Link>
        </div>
      </section>
      <section className="bg-black py-60 pt-72  clip-bg-section  ">
        <div className="container  text-center flex flex-col gap-10 items-center">
          <h1
            className="text-3xl lg:text-4xl  font-extrabold  bg-clip-text
         text-transparent bg-gradient-to-r from-CBlue to-BURed"
          >
            Descubre y recolecta pokemones extraodinarios
          </h1>

          <p className="text-md text-contrastText ">
            Busca por nombre o utilizando el numero nacional... <br />
            ¿qué pokemon estas buscando?
          </p>
          <span
            className="text-xl bg-clip-text block
         text-transparent bg-gradient-to-r from-CBlue to-BURed"
          >
            ■ ■ ■
          </span>
          <div className="mx-auto text-center ">
            <SearchPokemon />
          </div>
        </div>
      </section>
      <section className="container my-40 flex flex-col gap-12 items-center text-center">
        <h1
          className=" text-6xl font-extralight bg-clip-text text-center
         text-transparent bg-gradient-to-r from-CBlue to-BURed"
        >
          Descubre estos pokemones
        </h1>
        <hr className="w-[50%] mx-auto border-GoldenYellow border-t-2  " />
        <span
          className="text-xl bg-clip-text text-center block
         text-transparent bg-gradient-to-r from-CBlue to-BURed"
        >
          ■ ■ ■
        </span>
        <div
          className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4
           auto-rows-auto gap-7   "
        >
          <PokemonCard pokemonIdName={3} />
          <PokemonCard pokemonIdName={18} />
          <PokemonCard pokemonIdName={4} />
          <PokemonCard pokemonIdName={12} />
        </div>
      </section>
    </>
  );
}
function Hero() {
  function SectionBox({ color = 'poison', title, description, Icon, href }) {
    return (
      <Link href={href}>
        <a
          className={` group transition border-t-8 border-${color}  bg-bgPrimary  rounded-md shadow-2xl p-4 
        px-9 hover:-translate-x-10`}
        >
          <div className="flex justify-between content-center gap-6 flex-wrap">
            <h5 className="text-2xl font-bold  capitalize ">{title}</h5>
            <Icon
              className="text-4xl transition text-textSecondary
             group-hover:text-GoldenYellow group-hover:scale-125"
            />
          </div>
          <p className="text-textSecondary text-xs">{description} </p>
        </a>
      </Link>
    );
  }
  return (
    <section className="relative min-h-[50vh] h-full overflow-hidden ">
      <div className="absolute bg-gradient-to-r from-BURed to-CBlue  clip-hero-layer1 h-full w-full" />
      <div className="absolute bg-gradient-to-r from-BURed to-CBlue  clip-hero-layer2 h-full w-full" />
      <div
        className="absolute bg-gradient-to-r from-BURed to-CBlue 
 clip-hero-layer3  h-full w-full"
      />
      <div
        className="absolute bg-gradient-to-r from-BURed to-CBlue 
 clip-hero-layer4 h-full w-full"
      />
      <div className="absolute -top-32 -right-32 h-60 w-auto">
        <Image
          src={pokeball2}
          alt="pokemon back"
          height="500px"
          width="500px"
        />
      </div>
      <div className="absolute bottom-0 right-[30%] h-60 w-auto">
        <Image
          src={pokeball1}
          alt="pokemon back"
          height="150px"
          width="150px"
        />
      </div>
      <header
        className="container  relative grid grid-cols-1 lg:grid-cols-2 h-full 
 auto-rows-auto gap-7 "
      >
        <div className="flex flex-col gap-8 h-full  justify-center py-[10%]">
          <div className="flex h-10 justify-start w-fit gap-4">
            <span className="rounded shadow-md aspect-square min-w-[40px] bg-BURed/90 grid place-content-center">
              <MdCatchingPokemon className="text-3xl text-contrastText" />
            </span>
            <Image src={pokeball} alt="Logo" width="100" height="100" />
          </div>
          <h1
            className="text-4xl  md:text-5xl font-extrabold  bg-clip-text
 text-transparent 
 bg-gradient-to-r from-CBlue to-GoldenYellow lg:to-BURed md:leading-[4rem]"
          >
            Descubre y recolecta pokemones extraodinarios
          </h1>
          <span
            className="text-md bg-clip-text  
 text-transparent bg-gradient-to-r from-CBlue to-BURed"
          >
            ■ ■ ■
          </span>
          <div>
            <p className="text-sm text-textSecondary lg:w-[70%] ">
              Pokemon, tambien conocidos como monstruos de bolsillo en Japon, es
              una franquicia multimedia manejada por la compañia Pokemon,
              compañiafundada por Nintendo.
            </p>
          </div>
          <Link href="/pokemons">
            <Button
              component="a"
              color="primary"
              size="medium"
              classes="relative w-fit"
            >
              <span
                className=" animate-ping absolute top-1 right-3 inline-flex h-[75%] w-[75%] rounded 
              bg-DBlue opacity-75"
              />
              Descrubir
            </Button>
          </Link>
        </div>
        <div className="flex lg:flex-col gap-8 h-full  flex-wrap justify-center items-end py-[10%]">
          <SectionBox
            color="grass"
            title="Pokedex"
            description="Encuentra todos los pokemones"
            Icon={GiPokerHand}
            href="/pokemons"
          />
          <SectionBox
            color="ice"
            title="Tipos"
            description="Descubre todos los tipos pokemones"
            Icon={BsFillPeaceFill}
            href="/types"
          />
          <SectionBox
            color="electric"
            title="Generaciones"
            description="Ve todas las generaciones de pokemones"
            Icon={BsFillDiagram3Fill}
            href="/generations"
          />
          <SectionBox
            color="fairy"
            title="Favoritos"
            description="Guarda y colecciona tus pokemones favoritos"
            Icon={BsFillHeartFill}
            href="/favorites"
          />
        </div>
      </header>
    </section>
  );
}
const pokemonsSlide = {
  charizard: {
    name: 'charizard',
    id: 6,
    type: 'fuego',
    class: 'fire',
  },
  jynx: {
    name: 'jynx',
    id: 124,
    type: 'hielo',
    class: 'ice',
  },
  bulbasaur: {
    name: 'bulbasaur',
    id: 1,
    type: 'planta',
    class: 'grass',
  },
  Squirtle: {
    name: 'Squirtle',
    id: 7,
    type: 'agua',
    class: 'water',
  },
};
function PokemonsSection() {
  const [activePokemon, setActivePokemon] = useState('charizard');

  return (
    <section
      className="bg-gradient-to-r from-BURed to-CBlue  pt-10 pb-40 
  clip-bg-pokemon overflow-hidden"
    >
      <div
        className="container  relative grid grid-cols-1 sm:grid-cols-2 h-full 
     auto-rows-auto gap-7 "
      >
        <div className="absolute bg-GoldenYellow/80  top-12 left-0  w-60 h-60 blur-3xl " />
        <div className="absolute -bottom-32 -left-32 h-60 w-auto">
          <Image
            src={pokeball1}
            alt="pokemon back"
            height="150px"
            width="150px"
          />
        </div>
        <div className="absolute -bottom-32 -right-32 h-60 w-auto">
          <Image
            src={pokeball2}
            alt="pokemon back"
            height="200px"
            width="200px"
          />
        </div>
        <div className="relative my-auto">
          <p className="text-contrastText text-6xl font-thin">
            Atrapa los pokemones mas raros y fuertes{' '}
            <span
              className="text-xl bg-clip-text text-center
     text-transparent bg-gradient-to-r from-CBlue to-BURed"
            >
              ■ ■ ■
            </span>
          </p>

          <hr className="mt-12" />

          <div className="flex flex-row justify-evenly gap-4 my-12 items-end flex-wrap">
            {Object.entries(pokemonsSlide).map(([, pokemon]) => (
              <TypeButton
                key={pokemon.id}
                color={pokemon.class}
                title={pokemon.type}
                setActivePokemon={() => setActivePokemon(pokemon.name)}
              />
            ))}
          </div>

          <p className="text-contrastText text-4xl font-extralight  text-right capitalize">
            {activePokemon}
          </p>
        </div>

        <div className="text-right min-h-[500px]">
          <TransitionGroup style={{ position: 'relative' }}>
            <ReactTransition
              key={activePokemon}
              timeout={{
                enter: TIMEOUT,
                exit: TIMEOUT,
              }}
            >
              {(status) => (
                <div
                  style={{
                    ...transitionStyles[status],
                  }}
                >
                  <PokemonSlideCard id={pokemonsSlide[activePokemon].id} />
                </div>
              )}
            </ReactTransition>
          </TransitionGroup>
        </div>
      </div>
    </section>
  );
}
function TypeButton({ color, title, setActivePokemon }) {
  return (
    <button
      type="button"
      className={`border-l-8  border-${color} ${''} bg-bgPrimary/10   text-left 
             rounded-md shadow-2xl p-2 px-4 shadow-${color} max-w-[200px]
             transition hover:scale-110 hover:-translate-y-2
             `}
      onClick={setActivePokemon}
    >
      <p className="text-contrastText text-1xl font-medium capitalize">
        {title}
      </p>
    </button>
  );
}

function PokemonSlideCard({ id }) {
  return (
    <div className=" p-6 flex flex-col items-center">
      {/*       <h6 className="text-contrastText text-lg">seccion :{title}</h6>
       */}
      <div className=" block h-full w-[100%] ">
        <Image
          src={`${IMG_PATH_HOME}/${id}.png`}
          alt="pokemon back"
          height="500px"
          width="500px"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <Link href={`/pokemon/${id}`}>
        <Button component="a" color="primary" size="medium" classes="mt-5">
          Ver Pokemon
        </Button>
      </Link>
    </div>
  );
}
