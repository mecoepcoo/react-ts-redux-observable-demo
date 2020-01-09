import { UPDATE_COUNTER, UPDATE_COMPLETE, ModifyAction } from './counter'
import { ActionsObservable } from 'redux-observable'
import { delay, map } from 'rxjs/operators'

export const counterEpic = (action$: ActionsObservable<ModifyAction>) => {
  return action$.ofType(UPDATE_COUNTER).pipe(
    delay(1000),
    map(action => ({
      type: UPDATE_COMPLETE,
      payload: action.payload
    }))
  )
}
