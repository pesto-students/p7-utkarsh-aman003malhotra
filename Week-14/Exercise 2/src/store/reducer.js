const initialState = {
  steps: 0,
};


const stepReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STEP':
            return {
                steps:state.steps+1
            }
        case 'RESET_STEP':
            return {
                steps:0
            }
        default:
            return state;
    }
}

export default stepReducer;