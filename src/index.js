import React from 'react'
import ReactDom from 'react-dom/client'
import './css/App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
  <Router>
    <App/>
  </Router>
)