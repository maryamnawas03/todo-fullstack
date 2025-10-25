import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onTaskCompleted, onRefresh }) => {
  return (
    <div className="task-list">
      <div className="task-list-header">
        <h2>Recent Tasks</h2>
        <button 
          className="refresh-btn"
          onClick={onRefresh}
          title="Refresh tasks"
        >
          🔄
        </button>
      </div>
      
      {tasks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <h3>No tasks yet</h3>
          <p>Add your first task using the form on the left!</p>
        </div>
      ) : (
        <div className="tasks-container">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onTaskCompleted={onTaskCompleted}
            />
          ))}
          {tasks.length === 5 && (
            <div className="tasks-note">
              Showing last 5 uncompleted tasks
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskList;
