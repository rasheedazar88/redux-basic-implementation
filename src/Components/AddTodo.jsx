import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddTodo = () => {

    
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch();
    function onSubmit(e){
        e.preventDefault();
        dispatch({type: 'ADD_TODO', state: todo})
    }

    
  return (
    <div className='container p-5'>
        <form className='form-group' onSubmit={onSubmit}>
            <input type={"text"} className="form-control" placeholder='Add your Task' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <div className='form-control border-0 d-flex align-items-center justify-content-center'> 
            <button className='btn btn-primary '>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddTodo