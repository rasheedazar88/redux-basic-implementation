import React from 'react'
import { useSelector } from 'react-redux'

const ViewTodo = () => {

const data = useSelector((state)=>state.TodoReducer)
    
  return (
    <div className='container p-5'>
        <div className='header bg-primary'>
            <h2 className='p-2'>View Your Todos</h2>
        </div>

        <ul className='list-group'>
            {
                data.map((item)=>
                    <li key={item} className='list-group-item'>{item}</li>
                )
            }
        </ul>
    </div>
  )
}

export default ViewTodo