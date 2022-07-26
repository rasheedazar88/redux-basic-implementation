import React from "react";
import { Provider  } from "react-redux";
import Employee from "./Components/Employee";
import ViewEmployeeDetails from "./Components/ViewEmployee";
import { connect, useDispatch, useSelector } from 'react-redux'

const App = () => {

  const selected_employee = useSelector((state)=>(state.Employees_Data.selectedEmployee))

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Employee />
        </div>
        <div className="col-md-6">
            <ViewEmployeeDetails />
         </div>
      </div>
    </div>
  );
};

export default App;
