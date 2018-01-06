import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'


export default class Row extends Component {
  static defaultProps = {
    attr: '직업',
    value: '모험가'
  }
  static propTypes = {
    attr: PropTypes.string,

  }

  render() {
    const {attr, value} = this.props
    return (
      <div className="row">
        <span className="attr">속성명[{attr}]: </span>
        <span className="value"> {value}</span>
      </div>
    )
  }
}
