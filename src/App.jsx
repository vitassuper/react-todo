import React from 'react';
import TodoListContainer from './components/TodoListContainer';
import TodoAddItemContainer from './components/TodoAddItemContainer';
import './components/styles/App.css';

export default class App extends React.Component {
 
  render() {
    return (<div className="app">
      <h1 className="app-header">TodoApp</h1>
      <TodoAddItemContainer />
      <TodoListContainer />
    </div>)
  }
}
