import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WorkoutContextProider from './context/WorkoutContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutContextProider>
      <App />
    </WorkoutContextProider>
  </React.StrictMode>,
)
