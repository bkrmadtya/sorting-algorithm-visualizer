import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// style
import 'src/app.scss'

// components
import DashBoard from 'src/components/Dashboard'
import { Header, NavBar } from 'src/components/Common'

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
						<h1>Algorithms</h1>
					</Route>
					<Route path='/about'>
						<h1>About</h1>
					</Route>
					<Route path='/'>
						<DashBoard />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
