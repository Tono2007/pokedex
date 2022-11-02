import { useState, useEffect } from 'react';

import PageHeader from '@components/PageHeader';
import PokemonCard from '@components/PokemonCard';

import { FAVORITES_KEY } from '@constants/data';
import { FAVORITES_PAGE } from '@constants/routes';
import dataSeo from '@constants/dataSeo';

import { getDataLocal } from '@helpers';
import GenerateHeadPageSEO from '@helpers/seoPerPage';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getDataLocal(FAVORITES_KEY) || []);
  }, []);

  return (
    <section className="container">
      <GenerateHeadPageSEO
        title={dataSeo[FAVORITES_PAGE].title}
        descriptionPage={dataSeo[FAVORITES_PAGE].description}
      />
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
