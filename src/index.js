import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './css/index.css'


/* sintaxis react 18 donde se selecciona el root y se crea donde queremos*/
const root = ReactDOM.createRoot(document.getElementById('root'));

/* const listJSON = {
  saludo: "Hola",
  despedida: "chao"
}
*/
// Renderización del root creado más arriba

/* root.render(
  <React.StrictMode>    
    <App prop = {listJSON}>
      <h1>JEJEJEJEJE</h1>
      <a>HOLIS</a>
    </App>
  </React.StrictMode>
);
*/

root.render(
  <React.StrictMode>    
    <App/>
  </React.StrictMode>
)
