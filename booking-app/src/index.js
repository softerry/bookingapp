import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignupForm from './sigup';
import Login from "./login";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<SignupForm/>
  </React.StrictMode>
);

