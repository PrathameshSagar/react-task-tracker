export const deleteTask = (payload) => {
    return {
        type : 'DELETE',
        payload:payload
    }
}

export const addTask = (payload) => {
    return {
        type : 'ADD',
        payload:payload
    }
}