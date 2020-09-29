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

export interface NewTask {
  text: string;
  status: string;
  user: User;
}
