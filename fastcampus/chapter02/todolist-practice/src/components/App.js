import React, { Component } from 'react'

import { TodoListPage } from 'components'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <TodoListPage />
    )
  }
}

export default App
