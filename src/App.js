import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'
import Footer from './components/Footer'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <div className="Todo-App">
          <Message message='Hello There' />
          <TodoForm />
          <Route path='/:filter?' render={({ match }) => (
              <TodoList filter={ match.params.filter} />
            )} />
          <Footer />
        </div>
      </Router>
      </header>
    </div>
  );
}

export default App
