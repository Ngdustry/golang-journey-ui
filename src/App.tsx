import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { DndProvider, HTML5Backend } from 'shared/libs';
import { AppNavbar } from 'components/Nav/AppNavbar';
import { AppBoard } from 'components/Board/AppBoard';
import Login from 'components/User/Login';
import { Error } from 'components/Error/Error';

import 'shared/styles/index.css';

function App() {
  return (
    <div data-testid="app" className="app">
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <AppNavbar />
              <AppBoard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </BrowserRouter>
      </DndProvider>
    </div>
  );
}

export default App;
