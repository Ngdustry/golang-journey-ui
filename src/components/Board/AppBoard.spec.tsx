import React from 'react';
import { render } from '@testing-library/react';

import { AppBoard } from './AppBoard';

describe('AppBoard', () => {
  it('should render', () => {
    const { getByTestId } = render(<AppBoard />);
    expect(getByTestId('app-board')).toBeInTheDocument();
  });
});
