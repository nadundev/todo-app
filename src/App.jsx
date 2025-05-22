import { useState, useEffect } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshTodos, setRefreshTodos] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
  }, [refreshTodos]);

  const handleRefresh = () => {
    setRefreshTodos(!refreshTodos);
  };

  const handleToggleComplete = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);

    // Update the todo in the backend
    const todoToUpdate = updatedTodos.find((todo) => todo.id === todoId);

    fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: todoToUpdate.completed }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update todo");
        }
        console.log("Todo updated successfully");
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
        // Revert the change if the update failed
        setTodos(todos);
      });
  };

  return (
    <main className="wrapper">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1 className="outfit-bold">Today ✨</h1>
            <p className="inter-regular">What are you up to today?</p>
          </div>
          <button className="refresh-button" onClick={handleRefresh}>
            <ArrowPathIcon className="refresh-icon" />
            <span>Refresh list</span>
          </button>
        </div>
        <div className="todo-list">
          {loading ? (
            <p className="loading-message">Loading...</p>
          ) : todos.length === 0 ? (
            <p className="empty-message">No tasks available</p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleComplete={handleToggleComplete}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
