import { NewTask, TaskToUpdate } from '../types';

const URL = process.env.REACT_APP_SERVER_URL;

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

export const createTask = async (task: NewTask): Promise<any> => {
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
  const res = await fetch(`${URL}/${id}`, {
    method: 'PUT',
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
  const res = await fetch(`${URL}/${id}`, {
    method: 'DELETE'
  });

  if (res.status === 200) {
    window.location.reload();
    return;
  }
};
