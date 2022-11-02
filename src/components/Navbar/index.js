import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { HiMenu } from 'react-icons/hi';

import SearchPokemon from '@components/SearchPokemon';

import ROUTES, {
  HOME_PAGE,
  POKEMONS_PAGE,
  GENERATIONS_PAGE,
  TYPES_PAGE,
  FAVORITES_PAGE,
} from '@constants/routes';

import pokeball from '@assets/pokeball.png';

const navbarRoutes = [
  HOME_PAGE,
  POKEMONS_PAGE,
  GENERATIONS_PAGE,
  TYPES_PAGE,
  FAVORITES_PAGE,
];

function NavLink({ href, title, active }) {
  const activeStyle =
    'before:h-1 before:bg-GoldenYellow before:absolute before:bottom-0 before:w-full';
  const activeHandler = active ? activeStyle : '';
  return (
    <li className={`relative ${activeHandler}`}>
      <Link href={href}>
        <a
          className="h-full text-contrastText hover:bg-CBlue
         transition duration-300 flex px-5  py-3 lg:py-0
         items-center "
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

function Navbar({ location }) {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [location]);

  return (
    <nav
      className={`px-2 h-auto transition-all duration-1000 bg-DBlue/90 fixed backdrop-blur-sm
     w-full z-20 shadow-md  ${
       menu ? 'max-h-[400px]' : 'max-h-14'
     } overflow-hidden`}
    >
      <div
        className="container flex flex-col lg:flex-row  mt-1 lg:mt-0 flex-wrap justify-between
       lg:items-center mx-auto "
      >
        <div className="flex gap-3 p-2 items-center ml-3">
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMenu((prev) => !prev)}
          >
            <HiMenu className="text-3xl text-contrastText " />
          </button>
          <Image src={pokeball} alt="Logo" width="30" height="30" />
          <Link href="/">
            <a className="text-xl font-bold whitespace-nowrap text-contrastText">
              POKEDEX
            </a>
          </Link>
        </div>

        <div>
          <ul className="lg:h-14 flex flex-col lg:flex-row flex-wrap">
            {navbarRoutes.map((route) => (
              <NavLink
                key={route}
                title={ROUTES[route].name}
                href={ROUTES[route].path}
                active={location === ROUTES[route].path}
              />
            ))}
            <li>
              <SearchPokemon classes="mx-0 my-3 lg:my-0" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
