import React from 'react';
import { render } from '@testing-library/react';

import { DndProvider, HTML5Backend } from 'shared/libs';
import { draft } from 'shared/testing';
import { BoardListDraftItem } from './BoardListDraftItem';

describe('BoardListDraftItem', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <DndProvider backend={HTML5Backend}>
        <BoardListDraftItem draft={draft} handleCancelDraft={() => {}} />
      </DndProvider>
    );
    expect(getByTestId('board-list-draft-item')).toBeInTheDocument();
  });
});
