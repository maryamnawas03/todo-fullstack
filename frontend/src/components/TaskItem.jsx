import React, { useState } from 'react';
import { completeTask } from '../services/api';
import './TaskItem.css';

const TaskItem = ({ task, onTaskCompleted }) => {
  const [loading, setLoading] = useState(false);

  const handleComplete = async () => {
    setLoading(true);
    try {
      await completeTask(task.id);
      onTaskCompleted(task.id);
    } catch (error) {
      console.error('Error completing task:', error);
      alert('Failed to complete task. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="task-item">
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-description">{task.description}</p>
        <div className="task-meta">
          <span className="task-date">
            📅 {formatDate(task.createdAt)}
          </span>
        </div>
      </div>
      
      <div className="task-actions">
        <button
          className="complete-btn"
          onClick={handleComplete}
          disabled={loading}
          title="Mark as completed"
        >
          {loading ? '⏳' : '✓'}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
