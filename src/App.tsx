import React from 'react'

import 'src/app.scss'

import Bar from 'src/components/Bar'

const App: React.FC = () => {
	return (
		<div className='app'>
			<h1>Sorting algorithm visualizer</h1>

			<div className='bar__container'>
				<Bar />
				<Bar />
				<Bar />
				<Bar />
				<Bar />
				<Bar />
				<Bar />
				<Bar />
			</div>
		</div>
	)
}

export default App
