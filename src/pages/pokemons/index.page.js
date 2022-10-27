import PageLayout from '@components/PageLayout';
import GenerateHeadPageSEO from '../../helpers/seoPerPage';


function Pokemons(props) {
  console.log(props);
  const { data: results } = props;
  return (
    <PageLayout>
      <GenerateHeadPageSEO
        title="Pokemones"
        descriptionPage="Listado de pokemones"
      />
      <div className="container bg-slate-400">
        pokeeef
        {/*  {data ??
          data?.map(({ id, title, body }) => (
            <div key={id}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))} */}
      </div>
    </PageLayout>
  );
}
// eslint-disable-next-line consistent-return
export const getStaticProps = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151');
    const { results } = await res.json();
    return {
      props: {
        data: results,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return [];
};

export default Pokemons;
