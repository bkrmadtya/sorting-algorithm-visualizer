import React from 'react'
// style
import 'src/app.scss'

// hooks
import useSort from './hooks/useSort'

// components
import BarComponent from 'src/components/Bar'

// utils
import BubbleSort from 'src/algorithms/BubbleSort'

const App: React.FC = () => {
	const { state, sort, reset, cancel, previousStep, nextStep } = useSort(
		BubbleSort
	)

	return (
		<div className='app'>
			<h1>Sorting algorithms visualizer</h1>

			<div className='bar__container'>
				{state.steps[state.currentStep].map(a => (
					<BarComponent key={a.value} value={a.value} status={a.status} />
				))}
			</div>

			<button onClick={sort}>Sort</button>
			<button onClick={cancel}>Cancel</button>
			<button onClick={reset}>Reset</button>
			<button onClick={previousStep}>Previous Step</button>
			<button onClick={nextStep}>Next Step</button>
		</div>
	)
}

export default App
