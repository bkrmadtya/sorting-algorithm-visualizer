import React from 'react'
// style
import 'src/app.scss'

// hooks
import useSort from '../../hooks/useSort'

// components
import BarContainer from 'src/components/BarContainer'

// utils
import BubbleSort from 'src/algorithms/BubbleSort'
import MergeSort from 'src/algorithms/MergeSort'
import QuickSort from '../../algorithms/QuickSort'

// const arr = randomArrayGenerator(10)
// const sorted = new QuickSort().sort(arr)
// console.log(sorted)

const DashBoard: React.FC = () => {
	// const { state, sort, reset, cancel, previousStep, nextStep } = useSort(
	// 	MergeSort
	// )
	const { state, sort, reset, cancel, previousStep, nextStep } = useSort(
		QuickSort
	)

	return (
		<div className='dashboard'>
			<BarContainer steps={state.steps[state.currentStep]} />

			<button onClick={sort}>Sort</button>
			<button onClick={cancel}>Cancel</button>
			<button onClick={reset}>Reset</button>
			<button onClick={previousStep}>Previous Step</button>
			<button onClick={nextStep}>Next Step</button>
		</div>
	)
}

export default DashBoard
