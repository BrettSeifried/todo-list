import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/users.js';
import { Auth } from 'react';

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
                <h1> Your to-do List</h1>
                <button onClick={logout}>Logout</button>
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
