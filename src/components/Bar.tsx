import React from 'react'

const Bar: React.FC = () => {
	const barStyle = {
		height: 50,
		width: 5,
		margin: 2.5,
		backgroundColor: 'red'
	}
	return <div style={barStyle}></div>
}

export default Bar
