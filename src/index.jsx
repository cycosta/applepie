import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

// Main style
import './assets/stylesheets/app.scss'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './Home'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Home path="/" />
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)

