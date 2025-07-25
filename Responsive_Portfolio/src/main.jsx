import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'virtual:uno.css';    // Inject UnoCSS styles globally

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
