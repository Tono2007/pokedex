import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Generations from '@pages/generations/index.page';
import { generations } from '../../__mocks__/generationPage';

describe('Generations Page', () => {
  test('renders Generations Component content', () => {
    const component = render(
      <Generations generationsDetails={[generations]} />,
    );
    expect(component.container).toBeInTheDocument;
    expect(component.container).toHaveTextContent(
      'Una generación es denominada un conjunto de videojuegos ',
    );
  });

  test('should show even a generation box', () => {
    const component = render(
      <Generations generationsDetails={[generations]} />,
    );
    //    const generationsList = component.queryAllBy('article');
    const generationsList = component.getAllByText(/Generación I/);
    expect(generationsList).toHaveLength(1);
  });
});
