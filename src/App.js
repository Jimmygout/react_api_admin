import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HydraAdmin } from "@api-platform/admin";

function App() {
  return (
    <div className="App">
      <HydraAdmin entrypoint="https://127.0.0.1:8000/api"></HydraAdmin>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
