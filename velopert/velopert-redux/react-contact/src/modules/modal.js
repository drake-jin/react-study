import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

const SHOW = 'modal/SHOW'
const HIDE = 'modal/HIDE'
const CHANGE = 'modal/CHANGE'

export const show = createAction