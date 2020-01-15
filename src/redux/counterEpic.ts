import { UPDATE_COUNTER, UPDATE_COMPLETE, ModifyAction } from './counter'
import { ActionsObservable, ofType } from 'redux-observable'
import { delay, map } from 'rxjs/operators'

export const counterEpic = (action$: ActionsObservable<any>) => {
  return action$.pipe(
    ofType<ModifyAction>(UPDATE_COUNTER),
    delay(1000),
    map((action) => ({
      type: UPDATE_COMPLETE,
      payload: action.payload
    }))
  )
}
