import React from 'react';
import { render } from '@testing-library/react';
import { tasks } from 'shared/testing';

import { BoardList } from './BoardList';

describe('BoardList', () => {
  it('should render', () => {
    const { getByTestId } = render(<BoardList tasks={tasks()} title="To Do" />);
    expect(getByTestId('board-list')).toBeInTheDocument();
  });
});
