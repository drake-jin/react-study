import React, { Component } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import { TodoContainer } from 'containers'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={TodoContainer} />
      </BrowserRouter>
    )
  }
}

export default App
