import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

// 질문1 상위 컴포넌트에서  shouldComponentUpdate를 막으면 자식들의 update도 막던데... 이때에는 어떻게 해야하는 것?


ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
