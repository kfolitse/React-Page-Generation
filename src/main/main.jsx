import React from 'react'
import { render } from 'react-dom'
import './main.css'

import Example from '../example/Example'
import Header from '../header/Header'

const element = (
  <div>
    <h1>
      <Header />
    </h1>
    <Example />,
  </div>
)

render(element, document.getElementById('reactapp'))
