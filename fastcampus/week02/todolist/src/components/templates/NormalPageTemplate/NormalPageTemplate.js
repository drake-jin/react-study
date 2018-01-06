import React, { Component } from 'react'

import classNames from 'classnames/bind'

import styles from './NormalPageTemplate.scss'

const cx = classNames.bind(styles)

class NormalPageTemplate extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { children, header, centerContent } = this.props

    return (
      <div className={cx('page')}>
        { header && (<div className={cx('header')}> 헤더 </div>) }
        <div className={cx('content', centerContent && 'on-use-only-center')}>
          { children }
        </div>
      </div>
    )
  }
}

export default NormalPageTemplate
