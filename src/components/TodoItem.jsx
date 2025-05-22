import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, onToggleComplete }) {
  return (
    <div className="todo-item">
      <div className="todo-item-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="checkbox-input"
        />
      </div>
      <div className="todo-item-text">
        <p
          className={`todo-title inter-medium ${
            todo.completed ? "completed" : ""
          }`}
        >
          {todo.title}
        </p>
        {todo.description && (
          <p className="todo-description inter-regular">{todo.description}</p>
        )}
        <div className="todo-item-details">
          {todo.dueDate && (
            <span className="todo-detail inter-regular">
              <span className="todo-detail-label">Due:</span> {todo.dueDate}
            </span>
          )}
          {todo.priority && (
            <span
              className={`todo-priority todo-priority-${todo.priority.toLowerCase()} inter-regular`}
            >
              {todo.priority}
            </span>
          )}
          {todo.category && (
            <span className="todo-category inter-regular">{todo.category}</span>
          )}
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    completed: PropTypes.bool,
    dueDate: PropTypes.string,
    priority: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

export default TodoItem;
