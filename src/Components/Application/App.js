import React from 'react';
import { Sidebar } from './../Sidebar';
import { Topbar } from './../Topbar';
import { ApplicationContainer } from './../ApplicationContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Topbar />
        <ApplicationContainer />
      </div>
    </div>
  );
}

export default App;
