import React from 'react'
import { render } from 'react-dom'

import States from '../states/States'
import Header from '../header/Header'

const element = (
  <div>
    <h1>
      <Header />
    </h1>

    <States />
  </div>
)

render(
  element,

  document.getElementById('reactapp')
)
