import React from 'react'
import { BarStatus } from 'src/utils/enum'

const Legend: React.FC<{ type: BarStatus }> = ({ type }) => {
	return (
		<div className='legend'>
			<div
				className='legend__color'
				style={{
					backgroundColor: `var(--${type})`
				}}
			></div>
			<div className='legend__text'>
				<strong>{type}</strong>
			</div>
		</div>
	)
}

export default Legend
