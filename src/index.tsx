import React from 'react'
import ReactDOM from 'react-dom'

// style
import './index.scss'

// components
import App from 'src/App'

const unused = 'something'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
