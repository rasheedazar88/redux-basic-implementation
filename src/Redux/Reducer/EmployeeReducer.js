const initialState = {
    empData: [],
    selectedEmployee: ''
};

function EmployeeReducer(state=initialState, action) {
    switch(action.type) {
        case 'ADD_EMPLOYEE': 
        return {
            ...state,
            empData: [...state.empData, action.state]
        }
        case 'EDIT_EMPLOYEE': 
        return [...state, action.state]

        
        case 'SELECT_EMPLOYEE': 
        return{
            ...state,
            selectedEmployee: action.selectedEmployee
        }
            
            
        
            
        return state
        default: return state
    }
}

export default EmployeeReducer