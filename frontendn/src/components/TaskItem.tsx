import React from 'react';
import { Check, Clock } from 'lucide-react';
import { Task } from '../services/api';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';

interface TaskItemProps {
  task: Task;
  onComplete: (id: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete }) => {
  const handleComplete = () => {
    onComplete(task.id);
  };

  return (
    <Card className="mb-4 transition-all duration-200 hover:shadow-md border-l-4 border-l-purple-500">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">{task.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{task.description}</p>
            <div className="flex items-center text-xs text-gray-400">
              <Clock className="w-3 h-3 mr-1" />
              {new Date(task.createdAt).toLocaleDateString()}
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleComplete}
            className="ml-4 h-8 w-8 p-0 border-green-200 hover:bg-green-50 hover:border-green-300"
          >
            <Check className="w-4 h-4 text-green-600" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
