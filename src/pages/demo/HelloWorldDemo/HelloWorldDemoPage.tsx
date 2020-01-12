import React from 'react'

import CounterComponents from '@/components/counter'
import './HelloWorldDemoPage.less'

const HelloWorldDemoPage: React.FC<any> = () => {
  return (
    <div className="App">
      <CounterComponents />
    </div>
  )
}

export default HelloWorldDemoPage
