import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

export interface CreateTaskData {
  title: string;
  description: string;
}

export const taskAPI = {
  // Get all incomplete tasks
  getTasks: async (): Promise<Task[]> => {
    const response = await api.get('/tasks');
    return response.data;
  },

  // Create a new task
  createTask: async (data: CreateTaskData): Promise<Task> => {
    const response = await api.post('/tasks', data);
    return response.data;
  },

  // Complete a task
  completeTask: async (id: number): Promise<void> => {
    await api.put(`/tasks/${id}/complete`);
  },
};

export default api;
