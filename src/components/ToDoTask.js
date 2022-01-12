import React from 'react';

export default function ToDoTask({ task }) {
  return (
    <div>
      {task}
      <input type="radio"></input>
    </div>
  );
}
