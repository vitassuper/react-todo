import { TODO_CHANGE } from './actions';
import { TODO_ADD } from './actions';
import { TODO_REMOVE } from './actions';

const initState = {
    todos: [

    ],
    count:0
}

export const todoReducer = (state = initState, action) => {
    let temp;
    switch (action.type) {
        case TODO_CHANGE:
            temp = state.todos
            temp[temp.findIndex(v => v.id === action.payload)].completed=!temp[temp.findIndex(v => v.id === action.payload)].completed;
            return {
                ...state,
                todo: action.payload
            };
        case TODO_ADD:
            temp = state.todos;
            let count = state.count;
            count++;
            temp.push({id:count, title:action.payload.title, date:action.payload.date, completed:false})
            return {
                ...state,
                todos: temp,
                count:count
            };
        case TODO_REMOVE:
            temp = state.todos;
            temp.splice(temp.findIndex(v => v.id === action.payload), 1);
            return {
                ...state,
                todos: temp
            };
        default:
            return state;
    }
};