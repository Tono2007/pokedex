import { getPokemonTypes } from '../../services/pokemon';
import GenerateHeadPageSEO from '../../helpers/seoPerPage';

function Types(props) {
  console.log(props);
  const { data } = props;
  return (
    <section className="container">
      <GenerateHeadPageSEO
        title="Pokemones"
        descriptionPage="Listado de pokemones"
      />
      {/* {pokemons.length > 0 && (
       
      )} */}

      <header className="my-10">
        <h1 className="text-5xl font-bold ">Tipos</h1>
        <h2 className="text-base text-textSecondary">
          Aqui podras encontrar todos lo pokemones
        </h2>
      </header>
      {data.map((type) => {
        const classes = `m-3 h-20 w-20 bg-${type.name}`;

        return (
          <div key={type.name} className={classes}>
            {type.name}
          </div>
        );
      })}
    </section>
  );
}

export const getStaticProps = async () => {
  try {
    const res = await getPokemonTypes();
    const { results } = res.data;
    return {
      props: {
        data: results,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      data: [],
    },
  };
};

export default Types;
