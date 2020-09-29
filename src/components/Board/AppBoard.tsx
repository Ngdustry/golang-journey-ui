import React, { FC, useEffect, useState } from 'react';
import { Container, Row, Col } from 'shared/lib/';
import { fetchTasks } from 'shared/utils/Http';
import { Task } from 'shared/types';

import { BoardList } from 'components/Board/List/BoardList';

export const AppBoard: FC<unknown> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };

    fetchData();
  }, []);

  const titles = [
    { title: 'To Do', status: 'inactive' },
    { title: 'In Progress', status: 'active' },
    { title: 'Completed', status: 'completed' }
  ];

  return (
    <div data-testid="app-board" className="app-board">
      <Container fluid>
        <Row>
          {titles.map(({ title, status }) => (
            <Col key={status} md="4">
              <BoardList
                title={title}
                status={status}
                tasks={tasks.filter(task => task.status === status)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
