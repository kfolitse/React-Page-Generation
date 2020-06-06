import React, { Component } from 'react'
import { render } from 'react-dom'

import Header from '../header/Header'
import States from '../states/States'
import Example from '../example/Example'

function WhatToDisplay (props) {
  const isExampleView = props.isExampleView
  if (isExampleView) {
    return <Example />
  }
  return <States />
}
function SwitchToExampleViewButton (props) {
  return <button onClick={props.onClick}>Switch To Example View</button>
}

function SwitchToStatesViewButton (props) {
  return <button onClick={props.onClick}>Switch To States View</button>
}

class ViewDisplayControl extends Component {
  constructor (props) {
    super(props)
    this.handleExampleClick = this.handleExampleClick.bind(this)
    this.handleStatesClick = this.handleStatesClick.bind(this)
    this.state = { isExampleView: true }
  }

  handleExampleClick () {
    this.setState({ isExampleView: true })
  }

  handleStatesClick () {
    this.setState({ isExampleView: false })
  }

  render () {
    const isExampleView = this.state.isExampleView
    let button

    if (isExampleView) {
      button = <SwitchToStatesViewButton onClick={this.handleStatesClick} />
    } else {
      button = <SwitchToExampleViewButton onClick={this.handleExampleClick} />
    }

    return (
      <div>
        <div> {button} </div>
        <WhatToDisplay isExampleView={isExampleView} />
      </div>
    )
  }
}

const element = (
  <div>
    <h1>
      <Header />
    </h1>
    <ViewDisplayControl />,
  </div>
)

render(element, document.getElementById('reactapp'))
