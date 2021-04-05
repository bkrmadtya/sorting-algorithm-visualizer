import React from 'react'
import BarComponent from '../Bar'
import Bar from 'src/utils/Bar'

interface IProps {
	steps: Bar[]
}

const BarContainer: React.FC<IProps> = ({ steps }: IProps) => {
	return (
		<div className='bar__container'>
			{steps.map(a => (
				<BarComponent key={a.value} value={a.value} status={a.status} />
			))}
		</div>
	)
}

export default BarContainer
