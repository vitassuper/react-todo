import React from 'react'
export default class TodoItem extends React.Component {
    
    deleteTodo=(id, e)=>{ 
        e.preventDefault();
        this.props.deleteTodo(id);
    }

    toggleTodo=(id, e)=>{
        this.props.toggleTodo(id);
    }

    render() {
        console.log(this.props)
        return (<li className="todo-item">
         <label><input type="checkbox" checked={this.props.todo.completed} onChange={(e) => this.toggleTodo(this.props.todo.id, e)}/><span className="black-text" style={{
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
          }}>{this.props.todo.title}</span></label>
            <div className="todo-right"><span className="todo-date">{this.props.todo.date}</span><i className="material-icons red-text delete small" onClick={(e) => this.deleteTodo(this.props.todo.id, e)}>delete</i></div>
            </li>);
    }
}