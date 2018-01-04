import * as types from './ActionTypes'

export const todoInputChange = (input) => {
  console.log()
  return {
    type: types.TODO_INPUT_CHANGE,
    input,
  }
}
export const todoCreate = () => ({
  type: types.TODO_CREATE,
})
export const todoRemove = id => ({
  type: types.TODO_REMOVE,
  id,
})

export const todoToggle = id => ({
  type: types.TODO_TOGGLE,
  id,
})

export const themeColorChange = color => ({
  type: types.THEME_COLOR_CHANGE,
  color,
})
