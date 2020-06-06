import React, { Component } from 'react'
import './Header.css'

/*
  Since this component shows code we include the https://prismjs.com/
  formatter. We invoke it by labelling code blocks with class="language-jsx"
*/
// import Prism from "prismjs";
// import "prismjs/components/prism-jsx.js";
// import "../../node_modules/prismjs/themes/prism.css";

/* eslint-disable  react/jsx-one-expression-per-line */
/* eslint-disable  react/destructuring-assignment */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

// React Components are subclass of React.Componment.
class Header extends Component {
  constructor (props) {
    super(props) // Must run the constructor of React.Component first
  }

  // console.log('window.cs142models.headerModel()', window.cs142models.headerModel());
  wantedHeader () {
    var obj = window.cs142models.headerModel()
    return obj[0]
  }

  render () {
    return <div className="myhead"> {this.wantedHeader()} </div>
  }
}
export default Header
