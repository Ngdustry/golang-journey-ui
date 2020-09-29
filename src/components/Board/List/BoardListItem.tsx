import React, { FC, useEffect, useState } from 'react';

import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Form
} from 'shared/lib';
import { createTask, deleteTask, updateTask } from 'shared/utils/Http';
import { Task } from 'shared/types';

interface BoardListItemProps {
  task: Task;
}

export const BoardListItem: FC<BoardListItemProps> = ({ task }) => {
  const [text, _] = useState<string>(task.text);
  const [draftText, setDraftText] = useState<string>(text);
  const [mode, setMode] = useState<string>('read');

  useEffect(() => {
    if (!task.text) {
      setMode('write');
    }
  }, [task]);

  const handleClick = () => {
    if (mode === 'write') return;

    setMode('write');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setDraftText(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      text: draftText,
      status: task.status,
      user: {
        id: 'abc123',
        firstName: 'John'
      }
    };

    if (!task.id) {
      createTask(data);
    } else {
      updateTask(task.id, draftText);
    }
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleCancel = () => {
    setDraftText(text);
    setMode('read');
  };

  return (
    <div data-testid="board-list-item" onClick={handleClick}>
      {mode === 'read' ? (
        <h3>{text}</h3>
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
              {task.id && (
                <DropdownButton
                  id="dropdown-status"
                  title="Status"
                  variant="info"
                >
                  <Dropdown.Item href="#">To Do</Dropdown.Item>
                  <Dropdown.Item href="#">In Progress</Dropdown.Item>
                  <Dropdown.Item href="#">Completed</Dropdown.Item>
                </DropdownButton>
              )}
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
  );
};
