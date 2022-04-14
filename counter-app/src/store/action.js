const ADD = 'ADD'

export const addText=(data)=>{
    return{
        type: ADD,
        payload: data
    }
}


