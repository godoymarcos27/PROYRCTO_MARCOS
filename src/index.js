import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom'

// import {Login} from './componentes/login'
// import  Login_boton  from './componentes/login';
// import { Auth0Provider } from '@auth0/auth0-react';




// import BarraNAv from './Nav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode> 
    <BrowserRouter>
       <App />
       </BrowserRouter>
    {/* <BarraNAv></BarraNAv> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
