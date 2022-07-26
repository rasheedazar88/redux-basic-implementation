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

        
        case 'SELECT_EMPLOYEE': 
        
        return{
            ...state,
            selectedEmployee: action.selectedEmployee
        }
        default: return state
    }
}

export default EmployeeReducer