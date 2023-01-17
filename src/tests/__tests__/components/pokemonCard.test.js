import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import PokemonCard from '@components/PokemonCard/index';
import { generations } from '../../__mocks__/generationPage';

describe('PokemonCard Component', () => {
  test('renders PokemonCard Component content', () => {
    const component = render(<PokemonCard pokemonIdName={1} />);
    expect(component.container).toBeInTheDocument;
  });

  test('should show pokemon name', async () => {
    const component = render(<PokemonCard pokemonIdName={1} />);
    const title = await component.findByText(/bulbasaur/);
    expect(title).toHaveTextContent(/bulbasaur/);
  });

  test('should show loading state', () => {});
});
