import PageLayout from '@components/PageLayout';
import React from 'react';

function Pokemon({ pokemon }) {
  console.log(pokemon);
  return (
    <PageLayout>
      <div>POkemin id</div>
    </PageLayout>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  const paddedId = ('00' + id).slice(-3);
  pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
  return {
    props: { pokemon },
  };
};

export default Pokemon;
