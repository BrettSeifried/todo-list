import React from 'react';
import { logout, getUser } from '../services/users';
import { useState } from 'react';

export default function ToDoForm({
  task,
  setTask,
  currentTask,
  setCurrentTask,
  handleSubmit,
  errorMessage,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{errorMessage}</h3>
      <div className="radio-task">
        <label>{currentTask}</label>
        <input
          type="radio"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
        ></input>
      </div>
      <div className="input-task">
        <label>Create a Task</label>
        <input
          type="text"
          placeholder="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" />
      </div>
      <button onClick={handleSubmit}>Create New Task</button>
    </form>
  );
}
