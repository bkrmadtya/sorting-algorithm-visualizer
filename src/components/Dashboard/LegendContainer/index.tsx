import React from 'react'
import { BarStatus } from 'src/utils/enum'
import Legend from 'src/components/Dashboard/LegendContainer/Legend'
import { Header } from 'src/components/Common'

interface IProps {
	legends: BarStatus[]
}

const LegendContainer: React.FC<IProps> = ({ legends }) => {
	return (
		<div className='legendContainer'>
			<Header className='legendContainer__header'>Legends</Header>
			{legends.map(l => (
				<Legend key={l} type={l} />
			))}
		</div>
	)
}

export default LegendContainer
