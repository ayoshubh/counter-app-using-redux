export const ADD = 'ADD'
 export const REMOVE = 'REMOVE'

export const addText=(data)=>{
    return{
        type: ADD,
        payload: data
    }
}

export const deleteText=(data)=>{
    console.log("action",data)
    return{
        type: REMOVE,
        payload: data
    }
}



