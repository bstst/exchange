import React from 'react'
import { render } from 'react-dom'
import 'water.css/dist/light-legacy.standalone.css'

import { Provider } from './Store/useStore'
import App from './App'
import './style.scss'

render((
  <Provider>
    <App />
  </Provider>
), document.getElementById('root'))
