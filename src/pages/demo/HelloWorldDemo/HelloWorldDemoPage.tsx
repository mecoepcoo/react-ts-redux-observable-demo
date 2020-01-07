import React from 'react'

import CounterComponents from '@/components/counter'
import './HelloWorldDemoPage.less'

const props = {
  count: 1,
  decrement: () => {},
  increment: () => {}
}

const HelloWorldDemoPage: React.FC<any> = () => {
  return (
    <div className="App">
      <CounterComponents {...props} />
    </div>
  )
}

export default HelloWorldDemoPage
