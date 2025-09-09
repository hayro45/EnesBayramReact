import { useState } from 'react'
import './App.css'
import TodoCreate from './components/todoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  console.log(todos);
  
  return (
    <>
      <TodoCreate onAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </>
  )
}

export default App
