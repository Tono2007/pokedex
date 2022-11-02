import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MdCatchingPokemon } from 'react-icons/md';
import { GiPokerHand } from 'react-icons/gi';
import {
  BsFillDiagram3Fill,
  BsFillHeartFill,
  BsFillPeaceFill,
} from 'react-icons/bs';
import SearchPokemon from '@components/SearchPokemon';
import PokemonCard from '@components/PokemonCard';
import Button from '@components/Button';
import Pokemons from './pokemons/index.page';
import GenerateHeadPageSEO from '../helpers/seoPerPage';
import styles from '../styles/Home.module.css';
import pokeball from '../../public/assets/pokemon-logo.svg';
import pokeball2 from '../../public/assets/pokeball2.svg';
import pokeball1 from '../../public/assets/pokeball.svg';

export default function Home() {
  return (
    <>
      <GenerateHeadPageSEO title="fdf" descriptionPage="dfd" />
      <section className="relative min-h-[50vh] h-full overflow-hidden">
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
          className="container  relative grid grid-cols-1 sm:grid-cols-2 h-full 
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
              className=" text-5xl font-extrabold  bg-clip-text
         text-transparent bg-gradient-to-r from-CBlue to-BURed leading-[4rem]"
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
              <p className="text-sm text-textSecondary w-[70%] ">
                Pokemon, tambien conocidos como monstruos de bolsillo en Japon,
                es una franquicia multimedia manejada por la compañia Pokemon,
                compañiafundada por Nintendo.
              </p>
            </div>
            <Button color="primary" size="medium" classes="relative w-fit ">
              <span
                className=" animate-ping absolute top-1 right-3 inline-flex h-[75%] w-[75%] rounded 
                  bg-DBlue opacity-75"
              />
              Descrubir
            </Button>
          </div>
          <div className="flex flex-col gap-8 h-full  justify-center items-end py-[10%]">
            <SectionBox
              color="grass"
              title="Pokedex"
              description="Encuentra todos los pokemones"
              Icon={GiPokerHand}
            />
            <SectionBox
              color="ice"
              title="Tipos"
              description="Descubre todos los tipos pokemones"
              Icon={BsFillPeaceFill}
            />
            <SectionBox
              color="electric"
              title="Generaciones"
              description="Ve todas las generaciones de pokemones"
              Icon={BsFillDiagram3Fill}
            />
            <SectionBox
              color="fairy"
              title="Favoritos"
              description="Guarda y colecciona tus pokemones favoritos"
              Icon={BsFillHeartFill}
            />
          </div>
        </header>
      </section>
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

            <div className="flex flex-row justify-evenly gap-4 my-12 items-end">
              <TypeButton color="fire" title="Fuego" Icon={GiPokerHand} />
              <TypeButton color="ice" title="Hielo" Icon={GiPokerHand} />
              <TypeButton color="steel" title="Cuerpo" Icon={GiPokerHand} />
              <TypeButton color="grass" title="Cuerpo" Icon={GiPokerHand} />
            </div>

            <p className="text-contrastText text-4xl font-extralight  text-right">
              Charizard{' '}
            </p>
          </div>

          <div className="text-right">
            <PokemonSlideCard title="Pokedex" />
          </div>
        </div>
      </section>

      <section className="bg-white p-40">
        <div className="container   flex flex-col gap-7 items-center text-center">
          <h1
            className=" text-4xl font-bold  bg-clip-text
         text-transparent bg-gradient-to-r from-CBlue to-BURed"
          >
            Descubre y recolecta pokemones extraodinarios
          </h1>
          <h2
            className=" text-4xl font-bold  bg-clip-text
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
          <Button color="primary" size="large" classes="">
            Ver Pokedex
          </Button>
        </div>
      </section>
      <section className="bg-black p-60 clip-bg-section ">
        <div className="container text-center flex flex-col gap-10 items-center">
          <h1
            className=" text-4xl font-extrabold  bg-clip-text
         text-transparent bg-gradient-to-r from-CBlue to-BURed"
          >
            Descubre y recolecta pokemones extraodinarios
          </h1>

          <p className="text-md text-contrastText ">
            Busca por nombre o utilizando el numero nacional... <br />
            que pokemon estas buscando?
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
function TypeButton({ color, title, Icon }) {
  return (
    <button
      type="button"
      className={`border-l-8  border-${color} ${''} bg-bgPrimary/10   text-left 
               rounded-md shadow-2xl p-2 px-4 shadow-${color} max-w-[200px]
               transition hover:scale-110 hover:-translate-y-2
               `}
    >
      <p className="text-contrastText text-1xl font-medium">{title}</p>
    </button>
  );
}

function SectionBox({ color = 'poison', title, description, Icon }) {
  return (
    <button
      type="button"
      className={` group transition border-t-8 border-${color}  bg-bgPrimary  rounded-md shadow-2xl p-4 
      px-9 hover:-translate-x-10`}
    >
      <div className="flex justify-between content-center gap-6 flex-wrap">
        <h5 className="text-2xl font-bold  capitalize ">{title}</h5>
        <Icon
          className={`text-4xl transition text-textSecondary group-hover:${`text-${color}`} group-hover:scale-125`}
        />
      </div>
      <p className="text-textSecondary text-xs">{description} </p>
    </button>
  );
}

function SectionItem({ title, href }) {
  return (
    <div className="rounded bg-gradient-to-r from-grass/70 to-grass  p-6 w-full">
      <h2 className="text-contrastText">dfd</h2>
      seccion :{title}
    </div>
  );
}

function PokemonSlideCard({ title, href, id = 6 }) {
  return (
    <div className=" p-6 flex flex-col items-center">
      {/*       <h6 className="text-contrastText text-lg">seccion :{title}</h6>
       */}
      <div className=" block h-full w-[100%] ">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt="pokemon back"
          height="500px"
          width="500px"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <Button color="primary" size="medium" classes="mt-5 relative">
        Ver Pokemon
      </Button>
    </div>
  );
}
