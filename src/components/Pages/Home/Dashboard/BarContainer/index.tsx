import React from 'react'

// components
import BarComponent from './Bar'

// utils
import Bar from '../../../../../utils/Bar'

interface IProps {
	steps: Bar[]
}

const BarContainer: React.FC<IProps> = ({ steps }: IProps) => {
	return (
		<div className='barContainer'>
			{steps.map(a => (
				<BarComponent key={a.value} value={a.value} status={a.status} />
			))}
		</div>
	)
}

export default BarContainer
