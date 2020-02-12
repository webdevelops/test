import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import Header from './components/Header'
import Header from './components/Header-2'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  )
}

export default App