import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );
=======
import { BrowserRouter as Router, withRouter } from "react-router-dom";

const AppWithRouter = withRouter(App);

ReactDOM.render(
    <Router>
        <AppWithRouter />
    </Router>
    , document.getElementById('root'));

>>>>>>> 0dfb9e5336b3d6865c357c4371fbd81bc52db341

