import React from 'react'

type IProps = {
	options: {
		key: string
		value: string
	}[]
}

const Dropdown: React.FC<IProps> = ({ options }) => {
	return (
		<select className='dropdown'>
			{options.map(({ key, value }) => (
				<option key={key} value={value}>
					{key}
				</option>
			))}
		</select>
	)
}

export default Dropdown