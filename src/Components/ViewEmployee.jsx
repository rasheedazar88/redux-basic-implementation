import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SELECT_EMPLOYEE } from '../Redux/Action/ActionTypes';
import Employee from './Employee';

const ViewEmployeeDetails = () => {

const empData = useSelector((state)=>(state.Employee.empData))

const dispatch = useDispatch(); 

const selectEmployee=(empID)=>{
    dispatch({type: SELECT_EMPLOYEE, selectedEmployee: empID})
    
}


  return (
    <div className='container p-5'>
        <div className='header bg-success text-white'>
            <h2 className='p-2 m-0 h5'>Employee List</h2>
        </div>
        <ul className='list-group rounded-1 border-1 border-success p-1' >
            {
                empData.map((item, index)=>
                    <li onClick={(e)=>selectEmployee(item.empID)} className='card m-1' key={index}>
                        <div className='form-control'>
                            <h6>Employee ID: {item.empID}</h6>
                            <p>Name: {item.name}</p>
                            <p>Email: {item.email}</p>
                            <p>Contact: {item.tel} <span>Blood Group: {item.bldGp}</span></p>
                        </div>
                    </li>
                )
            }
        </ul>
    </div>
  )
}

export default ViewEmployeeDetails