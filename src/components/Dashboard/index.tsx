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
import Controls from '../Controls'

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
			<Controls {...{ sort, cancel, reset, previousStep, nextStep }} />
		</div>
	)
}

export default DashBoard
