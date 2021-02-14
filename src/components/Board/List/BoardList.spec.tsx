import React from 'react';
import { render } from '@testing-library/react';

import { tasks } from 'shared/testing';
import { DndProvider, HTML5Backend } from 'shared/libs';

import { BoardList } from './BoardList';

describe('BoardList', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <DndProvider backend={HTML5Backend}>
        <BoardList tasks={tasks()} title="To Do" status="active" />
      </DndProvider>
    );
    expect(getByTestId('board-list')).toBeInTheDocument();
  });
});
