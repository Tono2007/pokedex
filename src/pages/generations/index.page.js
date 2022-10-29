import GenerateHeadPageSEO from '../../helpers/seoPerPage';

function Generations() {
  return (
    <section className="container">
      <GenerateHeadPageSEO
        title="Pokemones"
        descriptionPage="Listado de pokemones"
      />
      {/* {pokemons.length > 0 && (
       
      )} */}

      <header className="my-10">
        <h1 className="text-5xl font-bold ">Generaciones</h1>
        <h2 className="text-base text-textSecondary">
          Aqui podras encontrar todos lo pokemones
        </h2>
      </header>
    </section>
  );
}

function Component({ type }) {
  const pokemonTypeBg = `bg-${type}`;

  return <div className={`m-3 h-20 w-20 ${pokemonTypeBg}`}>{type}</div>;
}

export default Generations;
