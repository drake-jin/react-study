import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './PanelCardTemplate.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class PanelCardTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { header, children, footer, title, left, right, center, themeColor } = this.props
    return (
      <div className={cx('panel')}>
        <div
          className={cx('header')}
          style={{
            backgroundColor: themeColor,
          }}
        >
          <div className={cx('title', { left, right, center })}>
            { title }
          </div>
          { header }
        </div>
        <div
          className={cx('content')}
          style={{
            borderBottom: `1px solid ${themeColor}`,
          }}
        >
          { children }
        </div>
        <div className={cx('footer')}>
          { footer }
        </div>
      </div>
    )
  }
}

PanelCardTemplate.defaultProps = {
  left: false,
  right: false,
  center: true,
  title: undefined,
  themeColor: '#22b8cf',
  header: (<div />),
  footer: (<div />),
}

PanelCardTemplate.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  themeColor: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
}

export default PanelCardTemplate
