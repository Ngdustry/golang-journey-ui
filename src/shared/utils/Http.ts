import { TaskToCreate, TaskToUpdate, Task } from 'shared/types';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const fetchHandler = async (_url: string) => {
  const res = await fetch(_url);
  const data = await res.json();

  return data;
};

export const fetchTasks = async (id?: string): Promise<Task[] | void> => {
  const _URL = id ? `${BASE_URL}/tasks/${id}` : `${BASE_URL}/tasks`;
  const token = localStorage.getItem('google');
  if (!token) return;

  const res = await fetch(`${_URL}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data = await res.json();

  return data;
};

export const createTask = async (
  task: TaskToCreate
): Promise<string | void> => {
  const token = localStorage.getItem('google');
  if (!token) return;

  const res = await fetch(`${BASE_URL}/tasks/create`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(task)
  });

  if (res.status === 201) {
    window.location.reload();
    return;
  }
};

export const updateTask = async (item: TaskToUpdate): Promise<void> => {
  const token = localStorage.getItem('google');
  if (!token) return;

  const { id, text, status } = item;

  const res = await fetch(`${BASE_URL}/tasks/update/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`
    },
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

export const deleteTask = async (id: string): Promise<void> => {
  const token = localStorage.getItem('google');
  if (!token) return;

  const res = await fetch(`${BASE_URL}/tasks/delete/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (res.status === 200) {
    window.location.reload();
    return;
  }
};
