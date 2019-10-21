import React from 'react';
import './App.css';
import NewUser from "./components/Form";
import ReturningUser from "./components/LoginForm";
import FooterNav from './components/Footer';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

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
          <ReturningUser />
        </div>
      </body>
      <footer>
      <BrowserRouter>
                <FooterNav>
                    <NavLink exact to="/" activeClassName="activeNavButton">Log In</NavLink>
                    <NavLink to="./NewUser" activeClassName="activeNavButton">Create Account</NavLink>

                    <Route exact path="/" component={ReturningUser}/>
                    <Route path="/Form" component={NewUser}/>
                </FooterNav>
            </BrowserRouter>
      </footer>
    </div>
  );
}

export default App;
