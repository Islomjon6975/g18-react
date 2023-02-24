import React from 'react'
import Calculator from './components/Calculator'
import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent'
import Students from './components/Students'
import Task from './components/Task'

export const Root = () => {
  return (
    <div style={{display: 'flex'}}>
      {/* <FunctionComponent title='Functional' />
      <ClassComponent title='Class' /> */}
      {/* <Calculator /> */}
      <Students />
      <Task />
    </div>
  )
}

