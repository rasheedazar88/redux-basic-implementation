import AddTodo from "./Action";

const Initial_State = []

function Reducer(state=Initial_State, action){
    console.log(action, "INGA")
    switch(action.type) {
        case 'ADD_TODO': 
        return [...state, action.state]
            
        
        default: return state
    }
}

export default Reducer