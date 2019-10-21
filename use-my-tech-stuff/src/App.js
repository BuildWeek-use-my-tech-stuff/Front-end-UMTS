import React from 'react';
import './App.css';
import NewUser from "./components/Form"
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Use My Tech Stuff</h1>
        </div>
      </header>
      <body>
        <div className="newUserForm01">
          <h1 className="h1NewUserForm">Sign Up</h1>
          <NewUser />
        </div>
      </body>
    </div>
  );
}

export default App;
