import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser, signUpUser } from '../services/users';
import classNames from 'classnames';
import { createToDo, fetchToDos } from '../services/todo';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ToDoForm from '../components/ToDoForm';

export default function ToDo() {
  // set state
  const { id } = useParams();
  const [task, setTask] = useState('');
  const [currentTask, setCurrentTask] = useState('');

  // Get Data(tasks by id)
  //   useEffect(() => {
  //     fetchToDos(id).then((data) => setTask(data));
  //   }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const taskData = await fetchToDos();
    };
    fetchData();
  });

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
    <div>
      <ToDoForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </div>
  );
}
