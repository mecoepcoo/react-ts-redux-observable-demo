import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { counterReducer } from './counter'
import { counterEpic } from './counterEpic'

export const rootReducer = combineReducers({
  counterReducer
})

export const rootEpic = combineEpics({
  counterEpic
})
