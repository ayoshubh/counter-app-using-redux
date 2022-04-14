import { createStore } from 'redux'

const inputFn = (state = { text: []},action) => {

    switch(action.type){
        case 'ADD': return { text: state.counter + 1}
        case 'DEC': return { counter: state.counter - 1}

        default: return state
    }
}

const store = createStore(inputFn)

export default store