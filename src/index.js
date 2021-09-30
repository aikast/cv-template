import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// function counter () {
//   const element = (
//     <p>
//       <span>Local time:</span>
//       <span>{new Date().toLocaleTimeString()}</span>
//     </p>
//   );
  
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(counter, 1000);

ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);
