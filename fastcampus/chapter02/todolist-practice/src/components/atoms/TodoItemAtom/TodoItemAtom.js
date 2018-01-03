import React, { Component } from 'react'

import styles from './TodoItemAtom.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class TodoItemAtom extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  shouldComponentUpdate(nextProps) {
    return this.props.checked !== nextProps.checked
    // 현재의 체크상태와 나중에 가져온 상태의 값이 다르면 update를 하도록
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props
    return (
      <div
        className={cx('todo-item')}
        onClick={() => {
          onToggle(id)
        }}
      >
        <div
          className={cx('remove')}
          onClick={(e) => {
            e.stopPropagation() // onToggle 이 실행되지 않도록 함
            onRemove(id)
          }}
        >
          &times;
        </div>
        <div className={cx('todo-text', checked && 'checked')}>
          <div>{text}</div>
        </div>
        { checked && (<div className={cx('check-mark')}>✓</div>) }
      </div>
    )
  }
}

export default TodoItemAtom
