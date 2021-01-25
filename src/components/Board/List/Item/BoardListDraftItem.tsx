import React, { FC, useState } from 'react';
import { Draft } from 'shared/types';
import { Button, ButtonGroup, Form } from 'shared/libs';
import { createTask } from 'shared/utils/Http';

import { DragWrapper } from 'components/Dnd/DragWrapper';

interface BoardListDraftItemProps {
  draft: Draft;
  handleCancelDraft: (draft: Draft) => void;
}

export const BoardListDraftItem: FC<BoardListDraftItemProps> = ({
  draft,
  handleCancelDraft
}) => {
  const [draftText, setDraftText] = useState<string>(draft.text);
  const [mode, setMode] = useState<string>('write');

  const handleClick = () => {
    if (mode === 'write') return;

    setMode('write');
  };

  const handleCancel = () => {
    handleCancelDraft(draft);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setDraftText(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      text: draftText,
      status: draft.status,
      user: {
        id: 'abc123',
        firstName: 'John'
      }
    };

    createTask(data);
  };

  return (
    <DragWrapper task={draft}>
      <div data-testid="board-list-item" onClick={handleClick}>
        {mode === 'read' ? (
          <h3>{draft.text}</h3>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="ControlTextarea">
              <Form.Control
                onChange={handleChange}
                as="textarea"
                rows={3}
                value={draftText}
              />
            </Form.Group>
            <div className="text-right">
              <ButtonGroup aria-label="options">
                <Button variant="primary mr-1" type="submit">
                  Create
                </Button>
                <Button variant="secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </ButtonGroup>
            </div>
          </Form>
        )}
      </div>
    </DragWrapper>
  );
};
