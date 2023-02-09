import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import {ContextApi} from "./Components/ContextApi"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextApi>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </ContextApi>
);

;
