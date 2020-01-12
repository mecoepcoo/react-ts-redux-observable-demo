import React, { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCounter, ICounterState } from '@/redux/counter'

const counterStep = 1

const counterComponent: React.FC<any> = (props: any) => {
  const { counter } = useSelector((state: ICounterState) => state)

  const dispatch = useDispatch()

  const decrement = () => {
    dispatch(updateCounter(-counterStep))
  }

  const increment = () => {
    dispatch(updateCounter(counterStep))
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button type="button" onClick={decrement}>
        -
      </button>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  )
}

export default counterComponent
