import { createStore } from 'redux'

const reducerFn = (state = { counter: 0},action) => {

    switch(action.type){
        case 'INC': return { counter: state.counter + 1}
        case 'DEC': return { counter: state.counter - 1}

        default: return state
    }
}

const store = createStore(reducerFn)

export default store

export const inputFn = ( state = [],action) =>{
    
   switch(action.type){
       case 'ADD': return { list: state.list = [...state.list] }
   }

}

const store2= createStore(inputFn)