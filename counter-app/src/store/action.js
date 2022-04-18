export const ADD = 'ADD'
 export const REMOVE = 'REMOVE'
 export const UPDATE = 'UPDATE'

export const addText=(data)=>{
    return{
        type: ADD,
        payload: {data:data, id: new Date().getTime().toString()}
        
    }
}

export const deleteText=(data)=>{
    // console.log("action",data)
    return{
        type: REMOVE,
        payload: data
    }
}

export const updateText=(data)=>{
    console.log("action",data)
    return{
        type: UPDATE,
        payload: data
    }
}



