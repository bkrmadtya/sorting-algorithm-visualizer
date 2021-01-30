import React from 'react'
// style
import 'src/app.scss'

// hooks
import useSort from './hooks/useSort'

// components
import BarComponent from 'src/components/Bar'

// utils
import BubbleSort from 'src/algorithms/BubbleSort'
import MergeSort from 'src/algorithms/MergeSort'
import { animated, useTransition } from 'react-spring'

const App: React.FC = () => {
	const { state, sort, reset, cancel, previousStep, nextStep } = useSort(
		// BubbleSort
		MergeSort
	)

	let height = 0
	const transitions = useTransition(
		state.steps[state.currentStep].map(data => ({
			...data,
			x: (height += 5)
		})),
		d => `${d.value}`,
		{
			from: { opacity: 1 },
			leave: { height: 0, opacity: 1 },
			enter: ({ x, value }) => ({ x, value, opacity: 1 }),
			update: ({ x, value }) => ({ x, value, opacity: 1 }),
			config: { duration: 100 }
		}
	)

	return (
		<div className='app'>
			<h1>Sorting algorithms visualizer</h1>

			<div className='content'>
				<div className='content__barContainer'>
					{transitions.map(({ item, props: { x, ...rest }, key }, index) => (
						<animated.div
							key={key}
							className='card'
							style={{
								zIndex: state.steps[0].length - index,
								transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
								...rest
							}}
						>
							<BarComponent
								key={item.value}
								value={item.value}
								status={item.status}
							/>
						</animated.div>
					))}
				</div>

				{/* <div className='bar__container'>
				{state.steps[state.currentStep].map(a => (
					<BarComponent key={a.value} value={a.value} status={a.status} />
					))}
				</div> */}

				<div className='content__controls'>
					<button onClick={sort}>Sort</button>
					<button onClick={cancel}>Cancel</button>
					<button onClick={reset}>Reset</button>
					<button onClick={previousStep}>Previous Step</button>
					<button onClick={nextStep}>Next Step</button>
				</div>
			</div>
		</div>
	)
}

export default App
