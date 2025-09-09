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

  const handleCompleted = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
    ));
  }

  const handleEdit = (id, newTitle) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, title: newTitle} : todo
    ));
  }

  console.log(todos);
  
  return (
    <>
      <TodoCreate onAddTodo={handleAddTodo} />
      <TodoList 
      todos={todos}
      handleDelete={handleDelete}
      handleCompleted={handleCompleted}
      handleEdit={handleEdit} />
    </>
  )
}

export default App
