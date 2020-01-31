import React from 'react'
import ReactDOM from 'react-dom'

import './lib'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  return (
    <h1>
      Hello DiceTrax! <FontAwesomeIcon icon='times' />
    </h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
