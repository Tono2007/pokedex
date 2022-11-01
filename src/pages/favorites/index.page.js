import { useState, useEffect } from 'react';
import PageHeader from '@components/PageHeader';
import PokemonCard from '@components/PokemonCard';
import { getDataLocal } from '../../helpers';
import { FAVORITES_KEY } from '../../constants/data';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getDataLocal(FAVORITES_KEY) || []);
  }, []);

  return (
    <section className="container">
      <PageHeader
        title="Favoritos"
        subtitle="Guarda tus pokemones favoritos, visitalos en cualquier momento."
      />
      <div
        className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3
         lg:grid-cols-4  xl:grid-cols-4  auto-rows-auto gap-7    pb-10"
      >
        {favorites.map((favorite) => (
          <PokemonCard pokemonIdName={favorite} key={favorite} />
        ))}
      </div>
    </section>
  );
}

export default Favorites;
