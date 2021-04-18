import React from 'react'

// style
import 'src/app.scss'

// components
import DashBoard from 'src/components/Dashboard'
import { Header, NavBar } from 'src/components/Common'

const App: React.FC = () => {
	return (
		<div className='app'>
			<NavBar />
			<DashBoard />
		</div>
	)
}

export default App
