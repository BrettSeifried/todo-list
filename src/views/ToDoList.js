import React, { useState } from 'react';
import { createToDo, fetchToDos } from '../services/todo';
import { useEffect } from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoTask from '../components/ToDoTask';

export default function ToDo() {
  // set state
  const [task, setTask] = useState('');
  const [currentTask, setCurrentTask] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      console.log(data);
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

  // Return ToDO form Radio button to toggle

  return (
    <>
      <div>
        <ToDoForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
      </div>
      <div>
        <ul>
          {currentTask.map((obj) => (
            <div key={currentTask.id}>
              <ToDoTask input="radio" {...obj} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
