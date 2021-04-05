import React from 'react'
// style
import 'src/app.scss'

// hooks
import useSort from '../../hooks/useSort'

// components
import BarContainer from 'src/components/BarContainer'

// utils
import { ISortingAlgorithm } from 'src/utils/interface'
import { BubbleSort, MergeSort, QuickSort } from 'src/algorithms'

let selectedAlgorithm: ISortingAlgorithm = BubbleSort
selectedAlgorithm = MergeSort
selectedAlgorithm = QuickSort

const DashBoard: React.FC = () => {
	const { state, sort, reset, cancel, previousStep, nextStep } = useSort(
		selectedAlgorithm
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
