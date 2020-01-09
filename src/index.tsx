import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '@/App'
import configureStore from '@/redux/store'
import '@/style.less'

const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
