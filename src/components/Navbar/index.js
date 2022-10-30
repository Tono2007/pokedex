import Image from 'next/image';
import Link from 'next/link';
import routes from '../../constants/routes';

import pokeball from '../../../public/assets/pokeball.png';

function NavLink({ href, title, active }) {
  const activeStyle =
    'before:h-1 before:bg-GoldenYellow before:absolute before:bottom-0 before:w-full';
  const activeHandler = active ? activeStyle : '';
  return (
    <li className={`relative ${activeHandler}`}>
      <Link href={href}>
        <a
          className="h-full text-contrastText hover:bg-CBlue
         transition duration-300 flex px-5 
         items-center "
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

function Navbar({ location }) {
  return (
    <nav className="px-2 bg-DBlue fixed  w-full z-10 shadow-md">
      <div className="container flex flex-wrap justify-between items-center mx-auto ">
        <div className="flex gap-3 p-2">
          <Image src={pokeball} alt="Logo" width="30" height="30" />
          <Link href="/">
            <a className="text-xl font-bold whitespace-nowrap text-contrastText">
              POKEDEX
            </a>
          </Link>
        </div>

        <div className="">
          <ul className="h-14 flex flex-row flex-wrap ">
            {routes.map((route, index) => (
              <NavLink
                key={route.name}
                title={route.name}
                href={route.path}
                active={location === route.path}
              />
            ))}
            <li className={`relative ${''}`}>
              <input placeholder="Buscar pokemons" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
