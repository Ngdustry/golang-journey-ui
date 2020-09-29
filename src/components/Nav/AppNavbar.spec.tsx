import React from 'react';
import { render } from '@testing-library/react';

import { AppNavbar } from './AppNavbar';

describe('AppNavbar', () => {
  it('should render', () => {
    const { getByTestId } = render(<AppNavbar />);
    expect(getByTestId('app-navbar')).toBeInTheDocument();
  });
});
