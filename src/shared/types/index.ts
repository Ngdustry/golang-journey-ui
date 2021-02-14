export interface User {
  id: string;
  firstName: string;
}

export interface Task {
  id: string;
  text: string;
  status: string;
  user: User;
}

export interface Draft {
  draft: boolean;
  id: number;
  text: string;
  status: string;
}

export interface TaskToUpdate {
  id: string;
  status: string;
  text: string;
}

export interface TaskToCreate {
  text: string;
  status: string;
  userID: string;
}

export const ItemTypes = {
  CARD: 'card'
};
