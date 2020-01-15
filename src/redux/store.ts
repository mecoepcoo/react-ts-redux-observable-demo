import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createLogger } from 'redux-logger'
import { rootReducer, rootEpic } from './root'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares: any[] = [epicMiddleware]

if (process.env.REACT_APP_ENV === 'dev') {
  const logger = createLogger()
  middlewares.push(logger)
}

export default function configureStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))
  epicMiddleware.run(rootEpic)
  return store
}
