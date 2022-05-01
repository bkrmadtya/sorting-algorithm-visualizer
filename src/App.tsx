import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import '@/styles/app.scss'

import { NavBar, Modal } from '@/components/shared'
import { Home, Algorithms, About } from '@/pages'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Router>
        <NavBar>
          <Link to='/algorithms'>ALGORITHMS</Link>
          <Link to='/about'>ABOUT</Link>
        </NavBar>
        <Modal />
        <Switch>
          <Route exact path='/algorithms' component={Algorithms} />
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
