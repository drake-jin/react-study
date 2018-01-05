import { createAction, handleActions } from 'redux-actions'
import { Map, List } from 'immutable'

// action 선언
export const TODO_INPUT_CHANGE = 'todo/TODO_INPUT_CHANGE'
export const TODO_CREATE = 'todo/TODO_CREATE'
export const TODO_REMOVE = 'todo/TODO_REMOVE'
export const TODO_TOGGLE = 'todo/TODO_TOGGLE'
export const TODO_THEME_COLOR_CHANGE = 'todo/THEME_COLOR_CHANGE'

// status 초기값 선언
const initialState = Map({
  todos: List([
    Map({ id: 0, text: '밥먹기', color: '#22b8cf', checked: false }),
  ]),
  input: '',
  id: 1,
  color: '#22b8cf',
})

// UI 에서 어떤 reducer로 갈지 정해주는 것
// ducks-pattern 이전에는 UI에서 reducer로 가기 이전에 전처리를 하며 순수함수로 짜주는것이 예의 였던 함수
export const todoInputChange = createAction(TODO_INPUT_CHANGE) // param: { input: string }
export const todoCreate = createAction(TODO_CREATE) // param: undefined
export const todoRemove = createAction(TODO_REMOVE) // param: { id: number }
export const todoToggle = createAction(TODO_TOGGLE) // param: { id: number }
export const themeColorChange = createAction(TODO_THEME_COLOR_CHANGE) // param: { color: string }


export default handleActions({
  [TODO_INPUT_CHANGE]: (state, action) => {
    console.log('TODO_INPUT_CHANGE')
    return state.set('input', action.payload)
  },

  [TODO_CREATE]: (state, action) => {
    console.log('TODO_CREATE')
    const todos = state.get('todos')

    return state.merge(Map({
      todos: todos.push(Map({
        id: state.get('id'),
        text: state.get('input'),
        checked: false,
        color: state.get('color'),
      })),
      id: state.get('id') + 1,
      input: '',
    }))
  },

  [TODO_REMOVE]: (state, action) => {
    console.log('TODO_REMOVE')
    const todos = state.get('todos')
    return state.set('todos', todos.filter(v => v.get('id') !== action.payload))
  },

  [TODO_TOGGLE]: (state, action) => {
    console.log('TODO_TOGGLE')
    const todos = state.get('todos')
    return state.set('todos', todos.map(v => ((v.get('id') === action.payload) ? v.set('checked', !v.get('checked')) : v)))
  },

  [TODO_THEME_COLOR_CHANGE]: (state, action) => {
    console.log('THEME_COLOR_CHANGE')
    return state.set('color', action.payload)
  },
}, initialState)
