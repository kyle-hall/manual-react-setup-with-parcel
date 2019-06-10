import React from 'react'
import ReactDOM from 'react-dom'

import HelloMessage from './src/App'

const App = document.querySelector('#app')

ReactDOM.render(<HelloMessage name='Kyle' />, App)
