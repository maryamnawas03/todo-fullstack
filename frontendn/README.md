# TaskFlow Frontend

A beautiful and modern React frontend for the TaskFlow todo application, built with TypeScript, Tailwind CSS, and custom UI components.

## Features

- 🎨 Beautiful, modern UI with gradient backgrounds and smooth animations
- 📱 Fully responsive design that works on all devices
- ⚡ Fast and intuitive user experience
- 🎯 Clean component architecture following React best practices
- 🔄 Real-time task management with optimistic updates
- 📊 Task statistics and progress tracking
- 🎭 Consistent design system with reusable UI components

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for beautiful icons
- **Axios** for API communication
- **Custom UI Components** inspired by shadcn/ui

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Backend server running on port 5000

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   ├── AddTaskForm.tsx # Task creation form
│   ├── TaskItem.tsx    # Individual task component
│   └── TaskStats.tsx   # Task statistics
├── lib/                # Utility functions
│   └── utils.ts        # Class name utilities
├── services/           # API services
│   └── api.ts          # Task API client
├── App.tsx             # Main app component
└── index.tsx           # App entry point
```

## API Integration

The app communicates with a Node.js/Express backend through a REST API:

- `GET /tasks` - Fetch incomplete tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id/complete` - Mark task as complete

## Design System

The app uses a consistent design system with:

- **Colors**: Purple primary (#8b5cf6) with gradients
- **Typography**: Inter font family
- **Spacing**: Tailwind CSS spacing scale
- **Components**: Custom components with consistent styling
- **Animations**: Smooth transitions and hover effects

## Features in Detail

### Task Management
- Create tasks with title and description
- Mark tasks as complete with single click
- Visual feedback for all interactions
- Error handling with user-friendly messages

### UI/UX
- Gradient backgrounds for visual appeal
- Card-based layout for better organization
- Responsive grid layout
- Loading states and empty states
- Accessibility considerations

### Performance
- Optimized React rendering
- Efficient state management
- Minimal bundle size with modern build tools

## Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for type safety
3. Follow React best practices
4. Ensure responsive design
5. Test thoroughly before submitting

## License

This project is part of a fullstack todo application.
