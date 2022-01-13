import React, { useState } from 'react';
import { createToDo, fetchToDos, toggleCompleted } from '../services/todo';
import { useEffect } from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoTask from '../components/ToDoTask';

export default function ToDo() {
  // set state
  const [task, setTask] = useState([]);
  const [currentTasks, setCurrentTask] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      setCurrentTask(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createToDo(task);
      alert('New Task Added');
    } catch {
      alert('error');
    }
  };

  const handleClick = async (todo) => {
    await toggleCompleted(todo.id, !todo.is_complete);
    setTask((prevState) =>
      prevState.map((todo) =>
        todo.id === task.id ? { ...task, is_complete: !task.is_complete } : todo
      )
    );
  };

  // Return ToDO form Radio button to toggle

  return (
    <>
      <ul>
        {currentTasks.map((todo) => (
          <div key={todo.id}>
            <ToDoTask todo={todo} handleClick={handleClick} />
          </div>
        ))}
      </ul>
      <ToDoForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </>
  );
}
