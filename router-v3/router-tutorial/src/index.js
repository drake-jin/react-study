import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Home from './Containers/Home';
import About from './Containers/About';
import Posts from './Containers/Posts';
import Post from './Components/Post';


import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="post" component={Posts}>
        <Route path=":id" component={Post}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);


registerServiceWorker();
