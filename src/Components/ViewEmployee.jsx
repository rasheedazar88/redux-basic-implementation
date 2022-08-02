import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SELECT_EMPLOYEE, DELETE_EMPLOYEE } from '../Redux/Action/ActionTypes';
import store from '../Redux/Store/ConfigureStore';
const ViewEmployeeDetails = () => {

const employees = useSelector((state)=>(state.Employees_Data.employees))

const selectEmployee=(selected_employee)=>{
    // dispatch({type: SELECT_EMPLOYEE, selectedEmployee: selected_employee})
    store.dispatch({type: SELECT_EMPLOYEE, selectedEmployee: selected_employee})
}

function onDelete(item){
    store.dispatch({type: DELETE_EMPLOYEE, state: item})
}

  return (
    <div className='container p-5'>
        <div className='header bg-success text-white'>
            <h2 className='p-2 m-0 h5'>Employee List</h2>
        </div>
        <ul className='list-group rounded-1 border-1 border-success p-1' >
            {
                employees.map((item, index)=>
                    <li className='card m-1' key={index}>
                        <div className='form-control'>
                            <button className='btn p-0' style={{position: 'absolute', top: '10px', right: '10px'}} onClick={(e)=>onDelete(item)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </button>
                            <div>
                                <h6>Employee ID: {item.empID}</h6>
                                <p>Name: {item.name}</p>
                                <p>Email: {item.email}</p>
                                <p>Contact: {item.tel} <span>Blood Group: {item.bldGp}</span></p>
                            </div>
                        </div>
                    </li>
                )
            }
        </ul>
    </div>
  )
}

export default ViewEmployeeDetails