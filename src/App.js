import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { updateCurrent } from './reducers/todo'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Todo-App">
          <TodoForm 
            currentTodo={props.currentTodo}
            changeCurrent={props.updateCurrent}/>
          <TodoList todos={props.todos} />
        </div>
      </header>
    </div>
  );
}

// export default App;

const mapDispatchToProps = { updateCurrent }
const mapStateToProps = (state) => state
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp
