import React from 'react';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  errorMessage,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{errorMessage}</h3>
      <div className="input-email">
        <label>E-mail</label>
        <input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </div>
    </form>
  );
}
