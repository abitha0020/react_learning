import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LevelPage from './levelPage.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Leaderboard from './Leaderboard.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Leaderboard />
  </React.StrictMode>,
)
