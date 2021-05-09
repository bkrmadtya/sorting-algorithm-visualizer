import React from 'react'

type IProps = {
	options: {
		key: string
		value: string
	}[]
	onChange?: React.ReactEventHandler
}

const Dropdown: React.FC<IProps> = ({ options, onChange }) => {
	return (
		<select className='dropdown' onChange={onChange}>
			{options.map(({ key, value }) => (
				<option key={key} value={value}>
					{key}
				</option>
			))}
		</select>
	)
}

export default Dropdown
