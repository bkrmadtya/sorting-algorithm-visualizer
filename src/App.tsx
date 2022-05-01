import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import '@/styles/app.scss'

import { NavBar, Modal } from '@/components/shared'
import { Home, Algorithms, About } from '@/pages'

const App: React.FC = () => (
  <div className='app'>
    <Router>
      <NavBar>
        <Link to='/algorithms'>ALGORITHMS</Link>
        <Link to='/about'>ABOUT</Link>
      </NavBar>
      <Modal />
      <Routes>
        <Route path='/algorithms' element={<Algorithms />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  </div>
)

export default App
