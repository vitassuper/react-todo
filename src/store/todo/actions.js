export const TODO_CHANGE = 'TODO_CHANGE';
export const TODO_ADD = 'TODO_ADD';
export const TODO_REMOVE = 'TODO_REMOVE';

export const addTodo = (todo) =>({
    type: TODO_ADD,
    payload: todo
    
});

export const changeTodo = (id) =>({
    type: TODO_CHANGE,
    payload: id
});

export const removeTodo = (id)=>({
    type: TODO_REMOVE,
    payload: id
});