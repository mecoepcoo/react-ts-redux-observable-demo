import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { updateCounter, ICounterState } from '@/redux/counter'

const counterStep = 1

const mappedState = (state: ICounterState) => ({
  count: state.count
})

const counterComponent: React.FC<any> = (props: any) => {
  const count = useSelector((state: ICounterState) => state.count)
  console.log(count)

  return (
    <div className="App">
      {/* <h1>{count}</h1> */}
      <button type="button" onClick={props.decrement}>
        -
      </button>
      <button type="button" onClick={props.increment}>
        +
      </button>
    </div>
  )
}

export default counterComponent
