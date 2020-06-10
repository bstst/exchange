import React from 'react'
import { render } from 'react-dom'

import { Provider } from './useStore'
import App from './App'
import './style.css'

render((
  <Provider>
    <App />
  </Provider>
), document.getElementById('root'))
