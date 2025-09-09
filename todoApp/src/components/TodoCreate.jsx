import './todo.css'
import { useState } from 'react';

function TodoCreate({onAddTodo}) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo({ id: Date.now(), title, isCompleted: false });
      setTitle('');
    }
  };

  return (
    <div className='todo-container'>
      <h1>Todo App</h1>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input className='todo-input' 
            name="title" type="text" 
            placeholder="Todo title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} />
        
        <button type="submit" className='todo-button'>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoCreate;
