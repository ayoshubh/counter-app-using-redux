import { createStore } from 'redux'
import { ADD, REMOVE, UPDATE } from './action'

const reducerFn = (state = { counter: 0 }, action) => {

    switch (action.type) {
        case 'INC': return { counter: state.counter + 1 }
        case 'DEC': return { counter: state.counter - 1 }

        default: return state
    }
}





export const inputFn = (state = [], action) => {
    
// const { data, id} = action.payload
    switch (action.type) {
        case ADD: return [   ...state, action.payload ]
        case REMOVE: return state.filter((task) => task.id !== action.payload )
        case UPDATE : return [action.payload]

        default: return state
    }

}
export const store = createStore(inputFn)

