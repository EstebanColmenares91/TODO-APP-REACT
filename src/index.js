import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App';
import './css/index.css'


/* sintaxis react 18 donde se selecciona el root y se crea donde queremos*/
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>    
    <App/>
  </React.StrictMode>
)
