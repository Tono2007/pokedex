import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
// import { prettyDOM } from '@testing-library/dom';

import Home from '@pages/index.page';

describe('Home Page', () => {
  test('renders Home Component content', () => {
    const component = render(<Home />);
    expect(component.container).toBeInTheDocument;
    expect(component.container).toHaveTextContent(
      'Atrapa los pokemones mas raros y fuertes',
    );
    expect(component.container).toHaveTextContent('Descubre estos pokemones');
  });

  test('should show subtitle 3 times', () => {
    const component = render(<Home />);
    /* const subtitles = await screen.findAllByText(
      /Descubre y recolecta pokemones extraodinarios/,
    ); */
    const subtitles = component.getAllByText(
      /Descubre y recolecta pokemones extraodinarios/,
    );
    expect(subtitles).toHaveLength(3);
  });

  test('should show pokemon name on pokemon type click', () => {
    const component = render(<Home />);
    const label = component.getByText(/charizard/);
    const waterButton = component.getByText(/agua/);
    fireEvent.click(waterButton);
    expect(label).toHaveTextContent('Squirtle');
  });
});
