import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Todo-App">
          <Message message='Hello There' />
          <TodoForm />
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App
