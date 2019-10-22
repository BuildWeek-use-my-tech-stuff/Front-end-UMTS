import React from 'react';
import './App.css';
import NewUser from "./components/Form";
import LoginForm from "./components/LoginForm";
import FooterNav from './components/Footer';
import { BrowserRouter, Route } from "react-router-dom";
import Form from './components/Form';
// import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <div>
          <h1>Use My Tech Stuff</h1>
        </div>
      </header>
      <body>
        <div className="newUserForm01">
          <ReturningUser />
        </div>
      </body>
      <footer>
        <FooterNav />
      </footer> */}
      <Route exact path ="/" component={LoginForm} />
      <Route path ="/CreateAccount" component={Form} />
    </div>
  );
}

export default App;