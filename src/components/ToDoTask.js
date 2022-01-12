import React from 'react';

export default function ToDoTask({ todo, handleClick }) {
  return (
    <div>
      {todo.task}
      <input
        checked={todo.id.is_complete}
        type="checkbox"
        onChange={() => handleClick(todo)}
      ></input>
    </div>
  );
}
