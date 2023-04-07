// Context reducer is a function that takes in the old state, and an action and gives new state.
const contextReducer = (state, action) => {
    switch(action.type){
        case 'DELETE_TODO':
            const deleted_todo = state.filter((td) => td.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(deleted_todo))
            return deleted_todo;
        case 'ADD_TODO':
            const added_todo = [action.payload, ...state];
            localStorage.setItem('todos', JSON.stringify(added_todo))
            return added_todo;
            
        case 'MARK_TODO':
            const updated_todo = state.map((td) => {
                if(td.id === action.payload){
                    td.complete = !td.complete;
                }
                return td;
            });
            localStorage.setItem('todos', JSON.stringify(updated_todo))
            return updated_todo;
        default:
            return state;
    }
}

export default contextReducer;