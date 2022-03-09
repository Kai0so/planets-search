import React from 'react';
import './App.css';
import TableInput from './components/TableInput';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <div>
      <main>
        <PlanetProvider>
          <TableInput />
          <Table />
        </PlanetProvider>
      </main>
    </div>
  );
}

export default App;
