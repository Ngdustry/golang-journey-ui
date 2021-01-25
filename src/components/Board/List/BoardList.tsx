import React, { FC, useState } from 'react';

import { Card, ListGroup, BsFillPlusCircleFill } from 'shared/libs';
import { Draft, Task } from 'shared/types';
import { DropWrapper } from 'components/Dnd/DropWrapper';
import {
  BoardListDraftItem,
  BoardListTaskItem
} from 'components/Board/List/Item';

interface BoardListProps {
  title: string;
  tasks: Task[];
  status: string;
}

export const BoardList: FC<BoardListProps> = ({ title, tasks, status }) => {
  const [draftList, setDraftList] = useState<Draft[]>([]);

  const handleAddDraft = (): void => {
    const draft = {
      draft: true,
      id: draftList.length,
      text: '',
      status,
      user: {
        id: 'abc123',
        firstName: 'John'
      }
    };

    setDraftList([...draftList, draft]);
  };

  const handleCancelDraft = (target: Draft): void => {
    setDraftList(draftList.filter(draft => draft.id !== target.id));
  };

  return (
    <DropWrapper target={status}>
      <Card data-testid="board-list" className="board-list my-sm-2">
        <Card.Header>
          <div className="h5 text-light d-flex justify-content-between align-items-center">
            {title}
            <BsFillPlusCircleFill
              className="add-task-icon"
              onClick={handleAddDraft}
            />
          </div>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            {tasks.map(task => (
              <ListGroup.Item key={task.id} className="board-list-item">
                <BoardListTaskItem task={task} />
              </ListGroup.Item>
            ))}
            {draftList.map(draft => (
              <ListGroup.Item key={draft.id} className="board-list-item">
                <BoardListDraftItem
                  draft={draft}
                  handleCancelDraft={handleCancelDraft}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </DropWrapper>
  );
};
