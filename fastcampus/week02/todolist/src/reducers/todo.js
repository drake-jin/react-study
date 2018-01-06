import { Map, List, fromJS } from 'immutable'

import * as types from 'actions/ActionTypes'

const initialState = Map({
  todos: List([
    Map({ id: 0, text: '밥먹기', color: '#22b8cf', checked: false }),
  ]),
  input: '',
  id: 1,
  color: '#22b8cf',
})
// state 는 내가 저장했던 상태
// action 은 내가 처리했던 값들의 결과

// action은 저장 결과
const todo = (state = initialState, action) => {
  const todos = state.get('todos')

  switch (action.type) {
  case types.TODO_INPUT_CHANGE:
    console.log('TODO_INPUT_CHANGE')
    return state.set('input', action.input)

  case types.TODO_CREATE:
    console.log('TODO_CREATE')
    return state.merge(fromJS({
      todos: todos.push(Map({
        id: state.get('id'),
        text: state.get('input'),
        checked: false,
        color: state.get('color'),
      })),
      id: state.get('id') + 1,
      input: '',
    }))
  case types.TODO_REMOVE:
    console.log('TODO_REMOVE')
    return state.set('todos', todos.filter(v => v.get('id') !== action.id))

  case types.TODO_TOGGLE:
    console.log('TODO_TOGGLE')
    return state.set('todos', todos.map(v => ((v.get('id') === action.id) ? v.set('checked', !v.get('checked')) : v)))

  case types.THEME_COLOR_CHANGE:
    console.log('THEME_COLOR_CHANGE')
    return state.set('color', action.color)

  default:
    console.log('ERRRRRORRRRR')
    return state
  }
}

export default todo

