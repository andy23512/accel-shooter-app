import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Start from './pages/Start';
import Open from './pages/Open';
import Sync from './pages/Sync';

function App() {
  useEffect(() => {
    (window as any).ipcRenderer.on('ping', (_: Event, message: string) => {
      console.log(message);
      (window as any).ipcRenderer.send('pong', 'nanoha');
    });
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul className="flex border-b">
            <li className="mr-6">
              <NavLink
                to="/"
                className="text-gray-400"
                exact
                activeClassName="text-blue-500"
              >
                Home
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/start"
                className="text-gray-400"
                exact
                activeClassName="text-blue-500"
              >
                Start
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/open"
                className="text-gray-400"
                exact
                activeClassName="text-blue-500"
              >
                Open
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/sync"
                className="text-gray-400"
                exact
                activeClassName="text-blue-500"
              >
                Sync
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/start">
            <Start></Start>
          </Route>
          <Route path="/open">
            <Open></Open>
          </Route>
          <Route path="/sync">
            <Sync></Sync>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
