const initialState = {
    employees: [],
    selectedEmployee: { empID: '', name: '', email: '', tel: '', bldGp: ''}
};

function EmployeeReducer(state=initialState, action) {
    switch(action.type) {
        case 'ADD_EMPLOYEE': 
        return {
            ...state,
            employees: [...state.employees, action.state]
        }
        case 'EDIT_EMPLOYEE': 
        return [...state, action.state]

        
        case 'DELETE_EMPLOYEE':
                const idToRemove = action.state.empID; 
                const filteredEmployees = state.employees.filter((item)=>item.empID !== idToRemove)
        return {
            ...state, 
            employees: state.employees.filter((item)=>item.empID !== idToRemove)
        }
        default: return state
    }
}

export default EmployeeReducer