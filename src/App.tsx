import React from 'react';

import { AppBoard } from './components/Board/AppBoard';
import { AppNavbar } from 'components/Nav/AppNavbar';

import 'shared/styles/index.css';

function App() {
  return (
    <div data-testid="app" className="app">
      <AppNavbar />
      <AppBoard />
    </div>
  );
}

export default App;
