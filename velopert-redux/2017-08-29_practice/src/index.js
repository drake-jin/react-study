import React from 'react'
import App from './components/App'
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)

if(module.hot) {
  module.hot.accept()
}
