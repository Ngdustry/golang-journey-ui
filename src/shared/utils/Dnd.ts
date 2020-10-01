import { updateTask } from './Http';

export const handleDrop = (item: any) => {
  const taskToUpdate = {
    ...item,
    status: item.target
  };

  updateTask(taskToUpdate);
};
