import React from "react";
import { Provider  } from "react-redux";
import Employee from "./Components/Employee";
import ViewEmployeeDetails from "./Components/ViewEmployee";

const App = () => {
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
