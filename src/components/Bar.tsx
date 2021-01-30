import React from 'react'
import { BarStatus } from 'src/utils/enum'
import BarColors from 'src/utils/BarColors'

interface IProps {
	value: number
	status: BarStatus
}

const Bar: React.FC<IProps> = ({ value, status }: IProps) => {
	const barStyle = {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
		height: value,
		width: 5,
		margin: 2.5,
		backgroundColor: BarColors[status],
		// border: `1px solid ${BarColors[status]}`,
		fontSize: 8,
		color: 'white',
		padding: 2
		// backgroundImage:
		// 	'linear-gradient(180deg, rgba(247,92,92,1) 0%, rgba(238,174,202,1) 36%, rgba(148,233,209,1) 100%)',
		// backgroundClip: 'text'
	}
	return (
		<div className='bar' style={barStyle}>
			{value}
		</div>
	)
}

export default Bar
