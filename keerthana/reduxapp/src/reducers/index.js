import { ADD, SUBTRACT, RESET, MULTIPLY } from '../Constants.js'
const initialState = {
    count: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {...state, count: state.count + 1 }
        case SUBTRACT:
            return {...state, count: state.count - 1 }
        case MULTIPLY:
            return {...state, count: state.count * state.count++ }
        case RESET:
            return {...state, count: 0 }
        default:
            return state
    }
}
export default reducer