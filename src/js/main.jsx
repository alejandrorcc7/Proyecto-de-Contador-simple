import React from 'react'
import ReactDOM from 'react-dom/client'


// index.css'
import '../styles/index.css'


// components
import Home from './components/Home';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
