import React, { useState } from 'react'
// style
import 'src/app.scss'

// components
import BarComponent from 'src/components/Bar'

// utils
import randomArrayGenerator from 'src/utils/randomArrayGenerator'
import Bar from 'src/utils/Bar'

interface IInitialState {
	steps: Bar[][]
	currentStep: number
	timeouts: []
	delay: number
}

const initailArray = randomArrayGenerator(10)

const initialState: IInitialState = {
	steps: [[...initailArray]],
	currentStep: 0,
	timeouts: [],
	delay: 200
}

const App: React.FC = () => {
	const [state, setState] = useState(initialState)

	return (
		<div className='app'>
			<h1>Sorting algorithm visualizer</h1>

			<div className='bar__container'>
				{randomArrayGenerator(10).map(a => (
					<BarComponent key={a.value} value={a.value} status={a.status} />
				))}
			</div>
		</div>
	)
}

export default App
