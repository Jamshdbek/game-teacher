import {combineReducers} from 'redux'

import game from './game'
import bird from './bird'
import pipe from './pipe'
import control from './control'
export default combineReducers({
  game,
  bird,
  pipe,
  control
})
