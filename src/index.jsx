import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

// Main style
import './assets/stylesheets/app.scss'

// Pages
import Home from './Home'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home path="/" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

