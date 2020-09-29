import React, { FC, useEffect, useState } from 'react';

import { Card, ListGroup, BsFillPlusCircleFill } from 'shared/lib';
import { Task } from 'shared/types';

import { BoardListItem } from 'components/Board/List/BoardListItem';

interface BoardListProps {
  title: string;
  tasks: Task[];
  status: string;
}

export const BoardList: FC<BoardListProps> = ({ title, tasks, status }) => {
  const [list, setList] = useState(tasks);

  useEffect(() => {
    setList(tasks);
  }, [tasks]);

  const handleAddTask = () => {
    const draft = {
      id: '',
      text: '',
      status,
      user: {
        id: 'abc123',
        firstName: 'John'
      }
    };

    setList([draft, ...list]);
  };

  return (
    <Card data-testid="board-list" className="board-list my-sm-2">
      <Card.Header>
        <div className="h5 text-light d-flex justify-content-between align-items-center">
          {title}
          <BsFillPlusCircleFill
            className="add-task-icon"
            onClick={handleAddTask}
          />
        </div>
      </Card.Header>
      <Card.Body>
        <ListGroup>
          {list.map(task => (
            <ListGroup.Item key={task.id} className="board-list-item">
              <BoardListItem task={task} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};
