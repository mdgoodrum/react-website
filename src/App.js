import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Todo-App">
          <TodoForm />
          <TodoList todos={props.todos} />
        </div>
      </header>
    </div>
  );
}

export default App;
