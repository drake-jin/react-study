import React, { Component } from 'react';
import classNames from 'classnames/bind';

import logo from './logo.svg';
import styles from './App.scss';

const cx = classNames.bind(styles)

class App extends Component {
  render() {
    console.log(styles)
    return (
      <div>
        <div className={cx('card', 'one')}></div>
        <div className={cx('card', 'two')}></div>
        <div className={cx('card', 'three')}></div>
        <div className={cx('card', 'four')}></div>
        <div className={cx('card', 'five')}></div>
      </div>
    );
  }
}

export default App;
