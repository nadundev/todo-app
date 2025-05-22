# Todo List App

A simple todo list application built with React and Vite. This app allows you to manage your tasks, mark them as completed, and view details like due dates, priorities, and categories.

## Features

- View all your tasks with their details
- Mark tasks as completed
- Responsive design
- Real-time updates

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd todo-list-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the App

1. Start the JSON server for the backend:
   ```
   npx json-server --watch db.json --port 3001
   ```

2. In a new terminal, start the development server:
   ```
   npm run dev
   ```

3. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Database Structure

The app uses a JSON server with a `db.json` file as the backend. The database structure is as follows:

```json
{
  "todos": [
    {
      "id": "1",
      "title": "Learn React",
      "completed": false,
      "description": "Learn React and build a todo app",
      "priority": "high",
      "dueDate": "2023-08-30",
      "category": "learning"
    },
    {
      "id": "2",
      "title": "Build Todo App",
      "description": "Build a todo app using React and Tailwind CSS",
      "completed": false,
      "priority": "medium",
      "dueDate": "2023-09-15",
      "category": "project"
    }
  ]
}
```

## Adding New Tasks

To add new tasks, you can either:

1. Directly edit the `db.json` file
2. Use the JSON Server API by sending a POST request to `http://localhost:3001/todos`

## Technologies Used

- React
- Vite
- JSON Server
- Hero Icons
- CSS for styling
