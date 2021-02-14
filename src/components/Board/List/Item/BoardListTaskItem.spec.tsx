import React from 'react';
import { render } from '@testing-library/react';

import { DndProvider, HTML5Backend } from 'shared/libs';
import { task } from 'shared/testing';
import { BoardListTaskItem } from './BoardListTaskItem';

describe('BoardListTaskItem', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <DndProvider backend={HTML5Backend}>
        <BoardListTaskItem task={task} />
      </DndProvider>
    );
    expect(getByTestId('board-list-task-item')).toBeInTheDocument();
  });
});
