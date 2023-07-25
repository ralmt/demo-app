import React from 'react';
import logo from './logo.svg';
import './App.css';
import  ToDoItem from './components/toDoItem';

function App() {
  const todo = {text:"Do laundry", completed:false, important:true};
  return (
    <div className="App">
      <header className="App-header">
        <ToDoItem {...todo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
