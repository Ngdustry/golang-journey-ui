import React from 'react';
import { render } from '@testing-library/react';

import { DndProvider, HTML5Backend } from 'shared/libs';
import { AppBoard } from './AppBoard';

describe('AppBoard', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <DndProvider backend={HTML5Backend}>
        <AppBoard />
      </DndProvider>
    );
    expect(getByTestId('app-board')).toBeInTheDocument();
  });
});
