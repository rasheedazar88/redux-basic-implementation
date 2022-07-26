import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Connect } from 'react-redux'
import { ADD_EMPLOYEE } from '../Redux/Action/ActionTypes'


const Employee = () => {

   
    const dispatch = useDispatch();
    let initialState = { empID: '', name: '', email: '', tel: '', bldGp: ''}
    
    const [empDetails, setempDetails] = useState(initialState)
    
    function onSubmit(e){
        e.preventDefault();
        dispatch({type: ADD_EMPLOYEE, state: empDetails})
        setempDetails({  empID: '', name: '', email: '', tel: '', bldGp: ''})
    }

    function handleChange(e){
      let key = e.target.name; 
      let value = e.target.value; 
      setempDetails({...empDetails, [key]: value})
    }

    // var selectedEmployee, selected;
    // const getStatefromStore = useSelector((state)=>{
    //   selectedEmployee = state.Employee.selectedEmployee; 
    //   if (selectedEmployee != '') {
    //     selected = state.Employee.empData.find(item=>item.empID === selectedEmployee )
    //   }
    // })  
    
    
  return (
    <div className='container p-5'>
        <form className='form-group' onSubmit={onSubmit}>
            <h5>Add Employee</h5>
            <div className='d-flex gap-2 border-0 mb-2'>
              <input type="text" className="form-control" placeholder='Employee ID' value={empDetails.empID} name="empID" onChange={(e)=>handleChange(e)}/>
              <input type="text" className="form-control" placeholder='Name' value={empDetails.name} name="name" onChange={(e)=>handleChange(e)}/>  
            </div>
            <div className='d-flex gap-2 border-0 mb-2'>
              <input type="email"  className='form-control mb-2' placeholder='Email' value={empDetails.email} name='email' onChange={(e)=>handleChange(e)}/>
              <input type="tel"  className='form-control mb-2' placeholder='Phone' value={empDetails.tel} name="tel" onChange={(e)=>handleChange(e)}/>
            </div>
            <div className='row'>
              <div className='border-0 mb-2 col-md-6'>
                <label>Select Blood Group</label>
                <select className='form-control' value={empDetails.bldGp} name="bldGp" onChange={(e)=>handleChange(e)}>
                  <option value={''}>Select</option>
                  <option value={'AB+'}>AB+</option>
                  <option value={'AB-'}>AB-</option>
                  <option value={'A+'}>A+</option>
                  <option value={'A-'}>A-</option>
                  <option value={'B+'}>B+</option>
                  <option value={'B-'}>B-</option>
                  <option value={'O+'}>O+</option>
                  <option value={'O-'}>O-</option>
                </select>
              </div>
              <div className='col-md-6 mb-2 align-self-end'>
              <input type={"file"} className="form-control" />
              </div>
            </div>
             <div className='form-control border-0 d-flex align-items-center justify-content-center'> 
            <button className='btn btn-primary '>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Employee