import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/users.js';
import Auth from './views/Auth.js';
import ToDo from './views/ToDoList';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <main className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <h1>To-Do List to success</h1>
            {currentUser && (
              <>
                <ToDo setCurrentuser={setCurrentUser} />
                <button onClick={logoutUser}>Logout</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
