import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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

function Home () {
  return <h1>Wecome Home !!!!!! </h1>
}

class ViewDisplayControl extends React.Component {
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
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/example"> Example </Link>
            </li>
            <li>
              <Link to="/states"> States </Link>
            </li>
          </ul>

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/example" component={Example}></Route>
          <Route exact path="/states" component={States}></Route>
        </div>
      </Router>
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
