import React, { useState } from 'react';
import './App.css';

function App() {
  const [view, setView] = useState('todo');
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  
  // Define completeTodo function here
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (task && description) {
      const newTodo = {
        task,
        description,
        date: new Date().toLocaleString(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTask('');
      setDescription('');
    }
  };

  return (
    <div className="app">
      <h1>My Todo</h1>
      <div className="form">
        <div className="input-group">
          <label>Task</label>
          <input 
            type="text" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label>Description</label>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      
      <div className="switch">
        <button onClick={() => setView('todo')} className={view === 'todo' ? 'active' : ''}>
          Todo
        </button>
        <button onClick={() => setView('complete')} className={view === 'complete' ? 'active' : ''}>
          Complete
        </button>
      </div>
      
      <div className="todo-list">
        {view === 'todo' && (
          todos
            .filter(todo => !todo.completed)
            .map((todo, index) => (
              <div key={index} className="todo-item">
                <h3>{todo.task}</h3>
                <p>{todo.description}</p>
                <span>{todo.date}</span>
                <button onClick={() => completeTodo(index)}>Complete</button> {/* Calling completeTodo */}
              </div>
            ))
        )}
        {view === 'complete' && (
          todos
            .filter(todo => todo.completed)
            .map((todo, index) => (
              <div key={index} className="todo-item complete">
                <h3>{todo.task}</h3>
                <p>{todo.description}</p>
                <span>{todo.date}</span>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default App;
