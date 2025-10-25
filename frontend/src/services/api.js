import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get all tasks (last 5 uncompleted)
export const getTasks = async () => {
  try {
    const response = await api.get('/tasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Create a new task
export const createTask = async (taskData) => {
  try {
    const response = await api.post('/tasks', taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Mark task as completed
export const completeTask = async (taskId) => {
  try {
    const response = await api.put(`/tasks/${taskId}/complete`);
    return response.data;
  } catch (error) {
    console.error('Error completing task:', error);
    throw error;
  }
};

export default api;
