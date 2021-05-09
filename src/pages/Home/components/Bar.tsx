import React from 'react'

// utils
import { BarStatus } from '../../../utils'

interface IProps {
	value: number
	status: BarStatus
}

const Bar: React.FC<IProps> = ({ value, status }: IProps) => {
	const barStyle = {
		height: value * 2,
		backgroundColor: `var(--${status})`
	}
	return (
		<div className='bar' style={barStyle}>
			{/* {value} */}
		</div>
	)
}

export default Bar
