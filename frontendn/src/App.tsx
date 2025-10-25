import React, { useState, useEffect } from 'react';
import { CheckSquare, Circle } from 'lucide-react';
import { taskAPI, Task, CreateTaskData } from './services/api';
import { AddTaskForm } from './components/AddTaskForm';
import { TaskItem } from './components/TaskItem';
import { TaskStats } from './components/TaskStats';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const fetchedTasks = await taskAPI.getTasks();
      setTasks(fetchedTasks);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Please make sure the backend server is running.');
      console.error('Error fetching tasks:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTask = async (data: CreateTaskData) => {
    try {
      setIsLoading(true);
      const newTask = await taskAPI.createTask(data);
      setTasks(prev => [newTask, ...prev]);
      setError(null);
    } catch (err) {
      setError('Failed to add task. Please try again.');
      console.error('Error adding task:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompleteTask = async (id: number) => {
    try {
      await taskAPI.completeTask(id);
      setTasks(prev => prev.filter(task => task.id !== id));
      setCompletedCount(prev => prev + 1);
      setError(null);
    } catch (err) {
      setError('Failed to complete task. Please try again.');
      console.error('Error completing task:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-2xl shadow-lg">
              <CheckSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            TaskFlow
          </h1>
          <p className="text-gray-600 text-lg">Master your productivity, one task at a time</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Task Form */}
          <div className="lg:col-span-1">
            <AddTaskForm onAddTask={handleAddTask} isLoading={isLoading} />
          </div>

          {/* Tasks Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <TaskStats todoCount={tasks.length} completedCount={completedCount} />
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-900 border-b-2 border-purple-500 pb-2">
                Your Tasks
              </h2>
            </div>

            {isLoading && tasks.length === 0 ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                <p className="text-gray-500">Loading tasks...</p>
              </div>
            ) : tasks.length === 0 ? (
              <div className="text-center py-12">
                <Circle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">No tasks yet</h3>
                <p className="text-gray-400">Create your first task to get started</p>
              </div>
            ) : (
              <div className="space-y-3">
                {tasks.map(task => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onComplete={handleCompleteTask}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
