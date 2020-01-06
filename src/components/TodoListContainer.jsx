import React from 'react';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {removeTodo, changeTodo} from '../store/todo/actions'
class TodoListContainer extends React.Component {
    
    render() {
        return <TodoList todos={this.props.todos.todos} removeTodo={this.props.removeTodo} changeTodo={this.props.changeTodo}/>;
    }
}
const mapStateToProps=state=>{
    return {
        todos: state.todo,
    };
}

const mapDispatchToProps={
    removeTodo,
    changeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);