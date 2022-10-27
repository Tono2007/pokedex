import Image from 'next/image';
import Link from 'next/link';

import pokeball from '../../../public/assets/pokeball.png';

function NavLink({ href, title }) {
  return (
    <Link href={href}>
      <a
        className="text-contrastText hover:text-textPrimary"
        aria-current="page"
      >
        {title}
      </a>
    </Link>
  );
}

function Navbar() {
  return (
    <nav className="px-2 py-1  bg-DBlue">
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
          <ul className="flex   p-4  flex-row gap-8 ">
            <li>
              <NavLink title="Inicio" href="/" />
            </li>
            <li>
              <NavLink title="Pokemones" href="/pokemons" />
            </li>
            <li>
              <NavLink title="Inicio" href="/" />
            </li>
            <li>
              <NavLink title="Inicio" href="/" />
            </li>
            <li>
              <NavLink title="Inicio" href="/" />
            </li>
            <li>
              <NavLink title="Inicio" href="/" />
            </li>
            <li>
              <NavLink title="Inicio" href="/" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
