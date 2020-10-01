import React from 'react';
import { DndProvider, HTML5Backend } from 'shared/libs';

import { AppBoard } from './components/Board/AppBoard';
import { AppNavbar } from 'components/Nav/AppNavbar';

import 'shared/styles/index.css';

function App() {
  return (
    <div data-testid="app" className="app">
      <DndProvider backend={HTML5Backend}>
        <AppNavbar />
        <AppBoard />
      </DndProvider>
    </div>
  );
}

export default App;
