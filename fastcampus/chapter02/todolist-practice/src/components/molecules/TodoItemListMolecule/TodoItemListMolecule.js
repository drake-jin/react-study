import React, { Component } from 'react'
import { TodoItemAtom } from 'components'

class TodoItemListMolecule extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  shouldComponentUpdate(nextProps) {
    return this.props.todos !== nextProps.todos
    // Array의 내용을 확인해서 대조 하는것이 아닌 변수 자체의 주소값이 다른지 안다른지로 간헐적으로 해당 변수가 다른것인지 아닌지 체크하는 것.
  }

  render() {
    const { todos, onRemove, onToggle } = this.props

    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItemAtom
        id={id}
        text={text}
        checked={checked}
        key={id}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    ))
    return (
      <div>
        {todoList}
      </div>
    )
  }
}

export default TodoItemListMolecule
