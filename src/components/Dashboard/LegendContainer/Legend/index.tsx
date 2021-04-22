import React from 'react'
import BarColors from 'src/utils/BarColors'
import { BarStatus } from 'src/utils/enum'

const Legend: React.FC<{ type: BarStatus }> = ({ type }) => {
	return (
		<div className='legend'>
			<div
				className='legend__color'
				style={{
					backgroundColor: BarColors[type]
				}}
			></div>
			<div className='legend__text'>
				<strong>{type}</strong>
			</div>
		</div>
	)
}

export default Legend
