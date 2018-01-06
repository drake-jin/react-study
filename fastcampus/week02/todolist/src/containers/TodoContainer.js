import { connect } from 'react-redux'

import { TodoListPage } from 'components'
import * as actions from 'modules'

// store 안의 state 값을 props 로 연결해준다.
const mapStateToProps = state => ({
  color: state.get('color'),
  todos: state.get('todos'),
  input: state.get('input'),
  id: state.get('id'),
})

/*
  액션 생성자를 사용하여 액션을 생성하고,
  해당 액션을 dispatch 하는 함수를 만든 후, 이를 props 로 연결해준다.
*/
const mapDispatchToProps = dispatch => ({
  onTodoInputChange: (e) => {
    dispatch(actions.todoInputChange(e.target.value))
  },
  onTodoCreate: (id) => {
    dispatch(actions.todoCreate(id))
  },
  onTodoRemove: (id) => {
    dispatch(actions.todoRemove(id))
  },
  onTodoToggle: (id) => {
    dispatch(actions.todoToggle(id))
  },
  onThemeColorChange: (color) => {
    dispatch(actions.themeColorChange(color))
  },
})


// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListPage)
/*
상태를 연결시키는 함수는 mapStateToProps 로, = actions
액션함수를 연결시키는 함수는 mapDispatchToProps 로 만들어서, = reducers
이를 connect에 전달해주고,
그렇게 전달받은 함수에 우리가 아까 만든 Contact 컴포넌트를 전달하여 이를 내보냈습니다. = components
*/

export default TodoContainer
