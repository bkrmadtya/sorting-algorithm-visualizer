import { useEffect, useState } from 'react'
import Bar from 'src/utils/Bar'
import randomArrayGenerator from 'src/utils/randomArrayGenerator'
import { ISortingAlgorithm, IState } from 'src/utils/interface'

const arraySize = 25
const delay = 50

const initialArray = randomArrayGenerator(arraySize)

console.log(initialArray.map(i => i.value))

const initialState: IState = {
	steps: [[...initialArray]],
	currentStep: 0,
	timeouts: [],
	delay
}

const useSort = (
	sortingAlgo: ISortingAlgorithm
): {
	state: IState
	sort: () => void
	reset: () => void
	cancel: () => void
	previousStep: () => void
	nextStep: () => void
} => {
	const [state, setState] = useState(initialState)
	const [sortingAlgorithm] = useState(new sortingAlgo())

	useEffect(() => {
		const sortingSteps = sortingAlgorithm.sort(state.steps[0])

		console.log(sortingSteps)
		console.log(sortingSteps[sortingSteps.length - 1].map(i => i.value))
		setState({
			...state,
			steps: [...sortingSteps]
		})
	}, [sortingAlgorithm])

	const cancel = (): void => {
		state.timeouts.forEach(t => clearTimeout(t))
		setState({ ...state, timeouts: [] })
	}

	const sort = (): void => {
		let i = 0
		const timeouts = []

		cancel()

		if (state.currentStep >= state.steps.length - 1) {
			return
		}

		while (i < state.steps.length - 1 - state.currentStep) {
			const timeout = setTimeout(() => {
				setState(prevState => {
					const currentStep = prevState.currentStep

					return {
						...prevState,
						currentStep: currentStep + 1
					}
				})
			}, state.delay * i)

			timeouts.push(timeout)
			i++
		}

		setState({ ...state, timeouts: timeouts })
	}

	const reset = (): void => {
		cancel()
		const newArray = randomArrayGenerator(25)
		console.clear()
		console.log(newArray.map(i => i.value))
		const newSteps = sortingAlgorithm.sort(newArray)
		console.log(newSteps[newSteps.length - 1].map(i => i.value))
		console.log(isSorted(newSteps[newSteps.length - 1]))
		console.log({ newSteps })
		setState({
			steps: [...newSteps],
			currentStep: 0,
			timeouts: [],
			delay
		})
	}

	const isSorted = (arr: Bar[]) => {
		const copyArr = [...arr].sort((a, b) => a.value - b.value)

		return copyArr.every((i, idx) => arr[idx].value === i.value)
	}

	const previousStep = (): void => {
		cancel()

		if (state.currentStep <= 0) {
			return
		}

		setState(prevState => {
			const currentStep = prevState.currentStep
			return {
				...prevState,
				currentStep: currentStep - 1
			}
		})
	}

	const nextStep = (): void => {
		cancel()

		if (state.currentStep >= state.steps.length - 1) {
			return
		}

		setState(prevState => {
			const currentStep = prevState.currentStep

			return {
				...prevState,
				currentStep: currentStep + 1
			}
		})
	}

	return { state, sort, cancel, reset, previousStep, nextStep }
}

export default useSort
