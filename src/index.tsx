import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// components
import App from './App'

// store
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
