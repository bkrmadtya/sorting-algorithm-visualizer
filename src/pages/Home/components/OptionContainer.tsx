import React from 'react'

// components
import { Header, Dropdown } from '../../../shared'

const sizeOptions = [
	{
		key: '10',
		value: '10'
	},
	{
		key: '25',
		value: '25'
	},
	{
		key: '50',
		value: '50'
	}
]

const speedOptions = [
	{
		key: '1x',
		value: '1x'
	},
	{
		key: '2x',
		value: '2x'
	},
	{
		key: '4x',
		value: '4x'
	}
]

const OptionContainer: React.FC = () => {
	return (
		<div className='optionContainer'>
			<Header className='panelHeader'>
				<span>Size: </span>
				<Dropdown options={sizeOptions} />
			</Header>
			<Header className='panelHeader'>
				<span>Speed: </span>
				<Dropdown options={speedOptions} />
			</Header>
		</div>
	)
}

export default OptionContainer
