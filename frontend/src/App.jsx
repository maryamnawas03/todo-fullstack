import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks } from './services/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError('Failed to fetch tasks. Please check if the backend server is running.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks(prevTasks => [newTask, ...prevTasks.slice(0, 4)]);
  };

  const handleTaskCompleted = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading tasks...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>✓ Todo App</h1>
        <p>Stay organized and productive</p>
      </div>
      
      {error && <div className="error">{error}</div>}
      
      <div className="app-grid">
        <div className="form-section">
          <TaskForm onTaskAdded={handleTaskAdded} />
        </div>
        
        <div className="tasks-section">
          <TaskList 
            tasks={tasks} 
            onTaskCompleted={handleTaskCompleted}
            onRefresh={fetchTasks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
