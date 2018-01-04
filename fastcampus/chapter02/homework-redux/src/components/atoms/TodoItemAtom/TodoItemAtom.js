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
    return (this.props.checked !== nextProps.checked) || (this.props.id !== nextProps.id)
  }


  render() {
    const { text, checked, id, color, onToggle, onRemove } = this.props
    console.log(id)
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
        <div className={cx('todo-text', checked && 'checked')} style={{ color }}>
          {text}
        </div>
        { checked && (<div className={cx('check-mark')}>✓</div>) }
      </div>
    )
  }
}

export default TodoItemAtom
