import Image from 'next/image';
import Link from 'next/link';

import pokeball from '../../../public/assets/pokeball.png';

function NavLink({ href, title }) {
  return (
    <li className="">
      <Link href={href}>
        <a
          className="h-full text-contrastText hover:bg-CBlue
         transition duration-300 flex px-5 items-center"
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

function Navbar() {
  return (
    <nav className="px-2 bg-DBlue fixed  w-full">
      <div className="container flex flex-wrap justify-between items-center mx-auto ">
        <div className="flex gap-3">
          <Image src={pokeball} alt="Logo" width="30" height="30" />
          <Link href="/">
            <a className="text-xl font-bold whitespace-nowrap text-contrastText">
              POKEDEX
            </a>
          </Link>
        </div>

        <div className="">
          <ul className="h-14 flex flex-row  ">
            <NavLink title="Inicio" href="/" />
            <NavLink title="Pokemones" href="/pokemons" />
            <NavLink title="Generaciones" href="/" />
            <NavLink title="Habitats" href="/" />
            <NavLink title="Locations" href="/" />
            <NavLink title="Inicio" href="/" />
            <NavLink title="Favoritos" href="/" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
