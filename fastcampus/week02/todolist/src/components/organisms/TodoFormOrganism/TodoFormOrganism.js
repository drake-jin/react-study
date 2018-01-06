import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './TodoFormOrganism.scss'

const cx = classNames.bind(styles)

class TodoFormOrganism extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { inputValue, themeColor, onClick, onChange } = this.props
    return (
      <div className={cx('form')}>
        <input
          value={inputValue}
          onChange={onChange}
          onKeyPress={e => (e.key === 'Enter') && onClick()}
          type="text"
          style={{
            borderBottom: `1px solid ${themeColor}`,
            color: themeColor,
          }}
        />
        <div
          className={cx('create-button')}
          onClick={onClick}
          style={{
            backgroundColor: themeColor,
          }}
        >
          추가
        </div>
      </div>
    )
  }
}

TodoFormOrganism.defaultProps = {
  themeColor: '#22b8cf',
}

TodoFormOrganism.propTypes = {
  themeColor: PropTypes.string,
}

export default TodoFormOrganism
