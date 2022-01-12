import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/users.js';
import Auth from './views/Auth.js';
import ToDo from './views/ToDoList';
import { fetchToDos } from './services/todo';

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
            <p>test home page</p>
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
