import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Types from '@pages/types/index.page';
import types from '../../__mocks__/typesPage';

describe('Types Page', () => {
  test('renders Types Component content', () => {
    const component = render(<Types typesDetails={[types]} />);
    expect(component.container).toBeInTheDocument;
    expect(component.container).toHaveTextContent(
      'Aqui podras encontrar todos los tipos de pokemones',
    );
  });

  test('should show even a pokemon type box', () => {
    const component = render(<Types typesDetails={[types]} />);
    const generationsList = component.getAllByText(/Normal/);
    expect(generationsList).toHaveLength(1);
  });
});
