import React from 'react'

// style
import 'src/app.scss'

// components
import DashBoard from 'src/components/Dashboard'

const App: React.FC = () => {
	return (
		<div className='app'>
			<h1>Sorting algorithms visualizer</h1>
			<DashBoard />
		</div>
	)
}

export default App
