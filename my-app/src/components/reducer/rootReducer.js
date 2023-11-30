const initialState = {
    count: 0,
    name: 'Léa'
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.payload
            }
        case 'RESET':
            return {
                ...state,
                count: 0
            }
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    }
}
export default rootReducer