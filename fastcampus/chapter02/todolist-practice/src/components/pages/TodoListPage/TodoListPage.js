import React, { Component } from 'react'
import classnames from 'classnames/bind'

import
{
  NormalPageTemplate,
  PanelCardTemplate,
  TodoFormOrganism,
  TodoItemListMolecule,
  ColorPaletteListMolecule,
} from 'components'
import styles from './TodoListPage.scss'

const cx = classnames.bind(styles)


class TodoListPage extends Component {
  constructor(props) {
    super(props)

    this.id = 3
    this.state = {
      color: '#22b8cf',
      input: '',
      todos: [
        { id: 0, text: ' 리액트 소개', checked: false },
        { id: 1, text: ' 리액트 소개', checked: true },
        { id: 2, text: ' 리액트 소개', checked: false },
      ],
    }

    this.handleKeyChange = this.handleKeyChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleCreateItem = this.handleCreateItem.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleThemeColor = this.handleThemeColor.bind(this)
  }

  // 이 메서드의 this를 해당 클래스의 this를 이용할 수 있도록 생성자에서 this를 binding해주어야 한다. 만약 그게 아니라면
  // handleKeyPress = (e) => { }  이렇게 되면 익명함수를 이용하기 때문에 this는 class의 this를 바라보게 된다.
  handleKeyChange(e) {
    this.setState({
      input: e.target.value,
    })
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') this.handleCreateItem()
  }

  handleCreateItem() {
    const { input, todos } = this.state
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id,
        text: input,
        checked: false,
      }),
    })
    this.id += 1
  }

  handleRemove(selectedId) {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(({ id }) => id !== selectedId),
    })
  }

  handleToggle(selectedId) {
    const { todos } = this.state
    const index = todos.findIndex(({ id }) => id === selectedId)
    const selected = todos[index]
    const copiedTodos = [...todos]
    copiedTodos[index] = {
      ...selected,
      checked: !selected.checked,
    }
    this.setState({
      todos: copiedTodos,
    })
  }

  handleThemeColor(color) {
    this.setState({ color })
  }

  render() {
    const { id, input, todos, color } = this.state
    const {
      handleKeyChange,
      handleKeyPress,
      handleCreateItem,
      handleRemove,
      handleToggle,
      handleThemeColor,
    } = this
    return (
      <NormalPageTemplate centerContent >
        <PanelCardTemplate
          themeColor={color}
          title="To do List"
          header={(
            <ColorPaletteListMolecule
              selectedColor={color}
              themeColors={['#22b8cf', '#343a40', '#f03e3e', '#12b886', '#228ae6']}
              onSelectTheme={handleThemeColor}
            />
          )}
          footer={(
            <TodoItemListMolecule
              todos={todos}
              onRemove={handleRemove}
              onToggle={handleToggle}
            />)}
          center
        >
          <TodoFormOrganism
            themeColor={color}
            inputValue={input}
            onClick={handleCreateItem}
            onKeyPress={handleKeyPress}
            onChange={handleKeyChange}
          />
        </PanelCardTemplate>
      </NormalPageTemplate>
    )
  }
}

export default TodoListPage
