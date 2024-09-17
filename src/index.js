import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // This assumes you have an App.js file in the src folder.
import reportWebVitals from './reportWebVitals'; // Optional, you can remove it if not needed.

// Render the React App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: If you're using reportWebVitals, you can keep this part.
reportWebVitals();
