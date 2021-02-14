import { TaskToCreate, TaskToUpdate } from 'shared/types';

const URL = process.env.REACT_APP_SERVER_URL + '/tasks';

export const fetchHandler = async (_url: string) => {
  const res = await fetch(_url);
  const data = await res.json();

  return data;
};

export const fetchTasks = async (id?: string): Promise<any> => {
  const _URL = id ? `${URL}/${id}` : URL;
  const res = await fetch(`${_URL}`);
  const data = await res.json();

  return data;
};

export const createTask = async (task: TaskToCreate): Promise<any> => {
  const res = await fetch(`${URL}`, {
    method: 'POST',
    body: JSON.stringify(task)
  });

  if (res.status === 201) {
    window.location.reload();
    return;
  }
};

export const updateTask = async (item: TaskToUpdate): Promise<any> => {
  const { id, text, status } = item;
  const res = await fetch(`${URL}/update/${id}`, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify({
      text,
      status
    })
  });

  if (res.status === 200) {
    window.location.reload();
    return;
  }
};

export const deleteTask = async (id: string): Promise<any> => {
  const res = await fetch(`${URL}/delete/${id}`, {
    method: 'DELETE',
    mode: 'cors'
  });

  if (res.status === 200) {
    window.location.reload();
    return;
  }
};
