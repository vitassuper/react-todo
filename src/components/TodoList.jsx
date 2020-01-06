import React from 'react';
import TodoItem from './TodoItem'


export default class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.deleteTodo=this.deleteTodo.bind(this); 
    }
    deleteTodo(state){
        this.props.removeTodo(state);
    }
    render(){
        return (
        <ul className="todo-list">    
           {this.props.todos.map((item)=><TodoItem todo={item} key={item.id} deleteTodo={this.props.removeTodo} toggleTodo={this.props.changeTodo}/>)}
        </ul>);
    }
}

