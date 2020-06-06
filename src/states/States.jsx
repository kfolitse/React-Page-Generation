import React, { Component } from 'react'
import './States.css'

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends Component {
  constructor (props) {
    super(props)
    // console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
    this.state = { inputText: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ inputText: event.target.value })
  }

  targetStates (str) {
    var states = window.cs142models.statesModel()
    var target_states = []

    // console.log('target_states start', target_states);

    for (var i = 0; i < states.length; i++) {
      if (states[i].toLowerCase().includes(str.toLowerCase())) {
        target_states.push(states[i])
      }
    }

    if (target_states.length === 0) {
      console.log('target_states empty')
      return ['No such country!']
    }

    return target_states
  }

  handleSubmit (event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault()
  }

  render () {
    return (
      <div>
        {/* </div> Replace this with the code for CS142 Project #4, Problem #2 */}
        <label className="cs142-example-output">
          Search sub-string:
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
        </label>
        <p> sub-string is : {this.state.inputText} </p>

        <div className="regions">
          {' '}
          {this.targetStates(this.state.inputText)}{' '}
        </div>
      </div>
    )
  }
}

export default States
