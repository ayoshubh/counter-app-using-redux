import { createStore } from 'redux'
import { ADD, REMOVE } from './action'

const reducerFn = (state = { counter: 0 }, action) => {

    switch (action.type) {
        case 'INC': return { counter: state.counter + 1 }
        case 'DEC': return { counter: state.counter - 1 }

        default: return state
    }
}





export const inputFn = (state = [], action) => {

    switch (action.type) {
        case ADD: return [...state, action.payload]
        case REMOVE: return state.filter((task) => task !== action.payload )

        default: return state
    }

}
export const store = createStore(inputFn)

