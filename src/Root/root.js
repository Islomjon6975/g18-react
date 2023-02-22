import React from 'react'
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'

export const Root = () => {
  return (
    <div style={{display: 'flex'}}>
      <FunctionComponent title='Functional' />
      <ClassComponent title='Class' />
    </div>
  )
}

