import React from 'react'

// style
import 'src/app.scss'

// components
import DashBoard from 'src/components/Dashboard'
import { Header } from 'src/components/Common'

const App: React.FC = () => {
	return (
		<div className='app'>
			<Header>Sorting Algorithm Visualizer</Header>
			<DashBoard />
		</div>
	)
}

export default App
