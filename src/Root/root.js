import React from 'react'
import Navbar from '../Navbar.js'
import {Button as Btn} from '../Button.js'

export const Root = () => {

  const users = [
    {id: 1, price: 1200, country: 'indonesha', title: 'HTML'},
    {id: 2, price: 1200, country: 'Uk', title: 'CSS'},
    {id: 3, price: 1200, country: 'US', title: 'JS'},
    {id: 4, price: 1200, country: 'Uzbekistan', title: 'REACT JS'},
    {id: 5, price: 1200, country: 'indonesha', title: 'REDUX'},
  ]

  return (
    <div>
      <h1>Root</h1>
      <div className='users' style={{display: 'flex', flexWrap: 'wrap', gap: '30px'}}>
        {
          users.map(user => ( // {id: 1, price: 1200, country: 'indonesha', title: 'HTML'}
            <Navbar key={user.id}>{user}</Navbar>
          ))
        }
      </div>
    </div>
  )
}

