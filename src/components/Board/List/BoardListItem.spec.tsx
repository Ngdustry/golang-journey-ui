import React from 'react';
import { render } from '@testing-library/react';
import { task } from 'shared/testing';

import { BoardListItem } from './BoardListItem';

describe('BoardListItem', () => {
  it('should render task', () => {
    const { getByTestId, getByText } = render(<BoardListItem task={task} />);

    expect(getByTestId('board-list-item')).toBeInTheDocument();
    expect(getByText('Hello World!')).toBeInTheDocument();
  });
});
