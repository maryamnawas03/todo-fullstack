# Todo Frontend

A modern React frontend application for task management, built with Vite and styled with modern CSS.

## Features

- ✨ Modern React 18 with hooks
- 🎨 Beautiful glass morphism design
- 📱 Fully responsive layout
- ⚡ Fast development with Vite
- 🔄 Real-time task management
- 🎯 Form validation and error handling
- 🌟 Smooth animations and transitions

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with grid and flexbox

## Prerequisites

Make sure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Build

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## API Integration

The frontend is configured to communicate with the backend API running on `http://localhost:5000`. Make sure the backend server is running before starting the frontend development server.

### API Endpoints Used

- `GET /tasks` - Fetch last 5 uncompleted tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id/complete` - Mark task as completed

## Project Structure

```
src/
├── components/          # React components
│   ├── TaskForm.jsx     # Form for adding new tasks
│   ├── TaskList.jsx     # List of tasks
│   ├── TaskItem.jsx     # Individual task item
│   └── *.css           # Component styles
├── services/           # API services
│   └── api.js          # Axios configuration and API calls
├── App.jsx             # Main application component
├── App.css             # App-specific styles
├── main.jsx            # React entry point
└── index.css           # Global styles
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
