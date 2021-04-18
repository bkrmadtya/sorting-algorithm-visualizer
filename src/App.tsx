import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// style
import 'src/app.scss'

// components
import { NavBar } from 'src/components/Common'
import { Home, Algorithms, About } from 'src/components/Pages'

const App: React.FC = () => {
	return (
		<div className='app'>
			<Router>
				<NavBar>
					<Link to='/algorithms'>ALGORITHMS</Link>
					<Link to='/about'>ABOUT</Link>
				</NavBar>
				<Switch>
					<Route path='/algorithms'>
						<Algorithms />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
