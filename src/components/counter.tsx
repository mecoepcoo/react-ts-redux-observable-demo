import React from 'react'

const countStep = 1

interface props {
  count: any
  decrement: any
  increment: any
}

const counterComponent: React.FC<props> = (props: props) => {
  console.log(props)
  return (
    <div className="App">
      <h1>{props.count}</h1>
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
