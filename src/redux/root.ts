import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { counter } from './counter'
import { counterEpic } from './counterEpic'

export const rootReducer = combineReducers({
  counter
})

export const rootEpic = combineEpics(counterEpic)
