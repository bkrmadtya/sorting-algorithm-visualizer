import React from 'react'
// style
import 'src/app.scss'

// components
import Bar from 'src/components/Bar'

// utils
import randomArrayGenerator from 'src/utils/randomArrayGenerator'

const App: React.FC = () => {
	return (
		<div className='app'>
			<h1>Sorting algorithm visualizer</h1>

			<div className='bar__container'>
				{randomArrayGenerator(10).map(a => (
					<Bar key={a.value} value={a.value} status={a.status} />
				))}
			</div>
		</div>
	)
}

export default App
