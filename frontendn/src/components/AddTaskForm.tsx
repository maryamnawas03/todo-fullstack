import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { CreateTaskData } from '../services/api';

interface AddTaskFormProps {
  onAddTask: (data: CreateTaskData) => void;
  isLoading?: boolean;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask, isLoading }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({ title: title.trim(), description: description.trim() });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-purple-700">
          <Plus className="w-6 h-6 mr-2" />
          Add a Task
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Task Title
            </label>
            <Input
              id="title"
              type="text"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-purple-200 focus:border-purple-400 focus:ring-purple-400"
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <Textarea
              id="description"
              placeholder="Add more details about your task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-purple-200 focus:border-purple-400 focus:ring-purple-400 resize-none"
              rows={3}
              disabled={isLoading}
            />
          </div>
          
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={!title.trim() || isLoading}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
