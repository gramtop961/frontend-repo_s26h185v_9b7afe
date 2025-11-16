import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './law.css'

// Load site-wide JS (counters, etc.)
import './script.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
