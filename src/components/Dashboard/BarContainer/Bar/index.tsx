import React from 'react'
import { BarStatus } from 'src/utils/enum'
import BarColors from 'src/utils/BarColors'

interface IProps {
	value: number
	status: BarStatus
}

const Bar: React.FC<IProps> = ({ value, status }: IProps) => {
	const barStyle = {
		height: value * 5,
		backgroundColor: BarColors[status]
	}
	return (
		<div className='bar' style={barStyle}>
			{value}
		</div>
	)
}

export default Bar
