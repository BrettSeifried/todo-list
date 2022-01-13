import React from 'react';

export default function ToDoForm({
  task,
  setTask,
  currentTask,
  // setCurrentTask,
  handleSubmit,
  errorMessage,
}) {
  return (
    <>
      <p>{currentTask}</p>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <h3>{errorMessage}</h3>
          <div className="input-task">
            <label>Create a Task</label>
            <input
              type="text"
              placeholder="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Create New Task</button>
        </form>
      </div>
    </>
  );
}
