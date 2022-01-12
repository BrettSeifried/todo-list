import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser, signUpUser } from '../services/users';
import classNames from 'classnames';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [type, setType] = useState('signin');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp =
        type === 'signin' ? await signInUser(email, password) : await signUpUser(email, password);
      setCurrentUser(resp);
      //   console.log('Auth.js', resp);
    } catch {
      setErrorMessage('Sign in failed, Try again.');
    }
  };

  return (
    <div>
      <div className="section">
        <h2
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin' })}
        >
          Sign In
        </h2>
        <h2
          onClick={() => {
            setType('signup');
          }}
          className={classNames({ active: type === 'signup' })}
        >
          Sign Up
        </h2>
      </div>
      <h3> {type} </h3>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
