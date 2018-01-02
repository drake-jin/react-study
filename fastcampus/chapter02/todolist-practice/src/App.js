import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={cx('test')}>
          안녕?
        </div>
      </div>
    );
  }
}

export default App;
