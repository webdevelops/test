import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import { AppBox } from './components/tutorial/Box'

ReactDOM.render(
  <div>
    <App />
    <AppBox />
  </div>,
  document.getElementById('root')
)