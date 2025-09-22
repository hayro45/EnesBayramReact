import React, { useState } from 'react'
import './todo.css'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'

import type { TodoType } from '../types/Types'

function TodoCreate() {
  const dispatch = useDispatch()
  const [todoText, setTodoText] = useState<string>('')

  const handleCreateTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if(todoText.trim().length == 0) {
      alert('Lütfen bir todo giriniz.')
      return
    }

    const payload: TodoType = {
      id: Date.now(),
      text: todoText,
      isCompleted: false,
    }
    dispatch(createTodo(payload))
    setTodoText('')
  }

  return (
    <div className='todo-container'>
      <h1>Todo App</h1>
      <form className='todo-form' onSubmit={handleCreateTodo}>
        <input className='todo-input' 
            name='text' type='text' 
            placeholder='Yapılacaklar...' 
            value={todoText} 
            onChange={(e) => setTodoText(e.target.value)} />

        <button type='submit' className='todo-button'>Todo Ekle</button>
      </form>
    </div>
  )
}

export default TodoCreate
