import React from 'react';
import { Card, CardContent } from './ui/Card';

interface TaskStatsProps {
  todoCount: number;
  completedCount: number;
}

export const TaskStats: React.FC<TaskStatsProps> = ({ todoCount, completedCount }) => {
  return (
    <div className="flex gap-4 mb-6">
      <Card className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold">{todoCount}</div>
          <div className="text-sm opacity-90">To Do</div>
        </CardContent>
      </Card>
      
      <Card className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold">{completedCount}</div>
          <div className="text-sm opacity-90">Completed</div>
        </CardContent>
      </Card>
    </div>
  );
};
