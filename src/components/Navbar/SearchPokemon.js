import { useRouter } from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchPokemon() {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const { value } = e.target.pokemonName;
    if (value === '') return;
    e.target.pokemonName.value = '';
    router.push(`/pokemon/${value}`);
  };

  return (
    <form className="h-full flex items-center" onSubmit={handleSearch}>
      <div class="relative ml-4">
        <button
          title="Buscar"
          type="submit"
          className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-evfents-none"
        >
          <AiOutlineSearch className="text-contrastText text-lg" />
        </button>
        <input
          name="pokemonName"
          placeholder="Buscar pokemons"
          className="pl-10 p-1  bg-bgPrimary/30 placeholder:text-contrastText/50  max-w-[190px]
          border border-transparent rounded 
          text-contrastText
           focus:bg-bgPrimary/10 text-sm focus:border-GoldenYellow
          outline-none
        "
        />
      </div>
    </form>
  );
}

export default SearchPokemon;
