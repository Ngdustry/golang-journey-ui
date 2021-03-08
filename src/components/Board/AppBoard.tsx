import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Row, Col } from 'shared/libs';
import { fetchTasks } from 'shared/utils/Http';
import { Task } from 'shared/types';
import { validateToken } from 'shared/utils/Auth';

import { BoardList } from 'components/Board/List/BoardList';

const titles = [
  { title: 'To Do', status: 'inactive' },
  { title: 'In Progress', status: 'active' },
  { title: 'Completed', status: 'completed' }
];

export const AppBoard: FC<unknown> = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTasks();
      setTasks(data);
      setLoading(false);
    };

    const checkToken = async () => {
      const status = await validateToken();

      if (!status) history.push('/login');
      else fetchData();
    };

    checkToken();
  }, []);

  return (
    <>
      {loading ? null : (
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
      )}
    </>
  );
};
