import React, { useEffect, useState } from 'react'
// style
import 'src/app.scss'

// components
import BarComponent from 'src/components/Bar'

// utils
import randomArrayGenerator from 'src/utils/randomArrayGenerator'
import Bar from 'src/utils/Bar'
import bubbleSort from './algorithms/bubbleSort'

interface IInitialState {
	steps: Bar[][]
	currentStep: number
	timeouts: NodeJS.Timeout[]
	delay: number
}

const initailArray = randomArrayGenerator(10)

const initialState: IInitialState = {
	steps: [[...initailArray]],
	currentStep: 0,
	timeouts: [],
	delay: 0
}

const App: React.FC = () => {
	const [state, setState] = useState(initialState)

	useEffect(() => {
		const sortedSteps = bubbleSort(state.steps[0])
		setState({ ...state, steps: [...sortedSteps] })
	}, [])

	const cancel = () => {
		state.timeouts.forEach(t => clearTimeout(t))
		setState({ ...state, timeouts: [] })
	}

	const sort = () => {
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

	const reset = () => {
		cancel()
		const newArray = randomArrayGenerator(10)
		const newSteps = bubbleSort(newArray)
		setState({
			steps: [...newSteps],
			currentStep: 0,
			timeouts: [],
			delay: 0
		})
	}

	const previousStep = () => {
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

	return (
		<div className='app'>
			<h1>Sorting algorithm visualizer</h1>

			<div className='bar__container'>
				{state.steps[state.currentStep].map(a => (
					<BarComponent key={a.value} value={a.value} status={a.status} />
				))}
			</div>

			<button onClick={sort}>Sort</button>
			<button onClick={cancel}>Cancel</button>
			<button onClick={reset}>Reset</button>
			<button onClick={previousStep}>Previous Step</button>
		</div>
	)
}

export default App
