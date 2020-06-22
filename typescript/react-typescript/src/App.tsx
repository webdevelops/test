import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    };
    // setTodos([newTodo, ...todos]);
    setTodos(prev => [newTodo, ...prev]);
  };

  // const handleToggle = (id: number) => {
  //   setTodos(prev => prev.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   }));
  // };

  const handleToggle = (id: number) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const handleRemove = (id: number) => {
    const showRemove = window.confirm('Are you sure to delete?');

    if (showRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };

  return <>
    <Navbar />
    <div className="container">
      <TodoForm onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </div> 
  </>
}

export default App;
