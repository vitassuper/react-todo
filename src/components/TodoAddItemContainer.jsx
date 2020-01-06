import React from 'react';
import TodoAddItem from './TodoAddItem';
import {connect} from 'react-redux';
import {addTodo} from '../store/todo/actions'


class TodoAddItemContainer extends React.Component {
    render() {
        return <TodoAddItem todos={this.props.todos} addTodo={this.props.addTodo}/>;
    }
}
const mapStateToProps=state=>{
    return {
        todos: state.todo.todos,
    };
}

const mapDispatchToProps={
    addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAddItemContainer);