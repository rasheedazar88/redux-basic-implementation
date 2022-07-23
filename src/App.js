import React from "react";
import AddTodo from "./Components/AddTodo";
import ViewTodo from "./Components/ViewTodo";
import { Provider  } from "react-redux";
import store from "./Redux/ConfigureStore";

const App = () => {
  return (
    <Provider store={store}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AddTodo />
        </div>
        <div className="col-md-6">
          <ViewTodo />
        </div>
      </div>
    </div>
    </Provider>
  );
};

export default App;
