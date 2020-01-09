//types
export const UPDATE_COUNTER = 'UPDATE_COUNTER'
export const UPDATE_COMPLETE = 'UPDATE_COMPLETE'

type UPDATE_COUNTER = typeof UPDATE_COUNTER
type UPDATE_COMPLETE = typeof UPDATE_COMPLETE
export interface IUpdateCounter {
  type: UPDATE_COUNTER
  payload: number
}
export interface IUpdateComplete {
  type: UPDATE_COMPLETE
  payload: number
}
export type ModifyAction = IUpdateCounter | IUpdateComplete

//reducer
const initialCount = 0

export interface ICounterState {
  count: number
}

export function counterReducer(state: ICounterState = { count: initialCount }, action: ModifyAction): ICounterState {
  switch (action.type) {
    case UPDATE_COUNTER:
      return state
    case UPDATE_COMPLETE:
      return { count: state.count + action.payload }
    default:
      return state
  }
}

//action
export function updateCounter(counterStep: number) {
  return {
    type: UPDATE_COUNTER,
    payload: counterStep
  }
}
