import React from 'react'
import Header from './components/header'

const HelloMessage = props => (
  <div>
    <Header />
    <div className="container">
      <h1>Hello {props.name}</h1>
    </div>
  </div>
)

export default HelloMessage
