export function AddEmployee(){
    return {
        type: 'ADD_EMPLOYEE'
    }
}

export function selectedEmployee(empID){
    return {
        type: 'SELECT_EMPLOYEE'
    }
}