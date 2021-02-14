import React, { FC, useState } from 'react';
import { Task } from 'shared/types';
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Form
} from 'shared/libs';
import { deleteTask, updateTask } from 'shared/utils/Http';

import { DragWrapper } from 'components/Dnd/DragWrapper';

interface BoardListTaskItemProps {
  task: Task;
}

export const BoardListTaskItem: FC<BoardListTaskItemProps> = ({ task }) => {
  const [draftText, setDraftText] = useState<string>(task.text);
  const [mode, setMode] = useState<string>('read');

  const handleDelete = (): void => {
    deleteTask(task.id);
  };

  const handleCancel = (): void => {
    setMode('read');
  };

  const handleClick = (): void => {
    if (mode === 'write') return;

    setMode('write');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    setDraftText(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    updateTask({
      id: task.id,
      text: draftText,
      status: task.status
    });
  };

  return (
    <DragWrapper task={task}>
      <div data-testid="board-list-task-item" onClick={handleClick}>
        {mode === 'read' ? (
          <h3>{task.text}</h3>
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
                <DropdownButton
                  className="mx-1"
                  id="dropdown-actions"
                  title="Actions"
                >
                  <Dropdown.Item
                    as="button"
                    type="submit"
                    disabled={!draftText}
                    href="#"
                  >
                    {task.id ? 'Update' : 'Create'}
                  </Dropdown.Item>
                  {task.id && (
                    <Dropdown.Item href="#" onClick={handleDelete}>
                      Delete
                    </Dropdown.Item>
                  )}
                </DropdownButton>
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
