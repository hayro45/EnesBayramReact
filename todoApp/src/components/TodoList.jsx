import { useState } from 'react'
import './todo.css'

function TodoList({ todos, handleDelete, handleCompleted, handleEdit }) {
    const [isEdit, setIsEdit] = useState(false);
    const [whichEditId, setWhichEditId] = useState(null);
    const [editText, setEditText] = useState('')    


    
    const handleDeleteClick = (id) => {
        handleDelete(id);
    }
    const handleCompletedClick = (id) => {
        handleCompleted(id);
    }

    const handleEditClick = (todo) => {
        setIsEdit(true)
        setWhichEditId(todo.id)
        setEditText(todo.title)                       // initialize input
    }

    const handleSaveClick = (id) => {
        handleEdit(id, editText)                      // commit change
        setIsEdit(false)
        setWhichEditId(null)
        setEditText('')                               // clear input
    }

    
    return (
        <>
        {todos && todos.length > 0 ? todos.map(todo => (
            
            <div className='todo-list-container' key={todo.id}>
                <input 
                    className='todo-checkbox'
                    type="checkbox" 
                    key={`checkbox-${todo.id}`}
                    name={`isCompleted-${todo.id}`}
                    checked={todo.isCompleted} 
                    onChange={() => handleCompletedClick(todo.id)}
                />
                <div style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} key={`title-${todo.id}`}>
                    {isEdit && whichEditId === todo.id 
                        ? ( <input 
                                className='todo-input'
                                type="text"
                                value={editText}         
                                onChange={e => setEditText(e.target.value)}/> 
                        ) : todo.title}

                </div>
                <div key={`buttons-${todo.id}`}>
                    {isEdit && whichEditId === todo.id
                        ? (
                            <button
                              onClick={() => handleSaveClick(todo.id)}
                              style={{ marginRight: '5px', padding: '5px 10px' }}
                            >
                              Save
                            </button>
                          )
                        : (
                            <button
                              onClick={() => handleEditClick(todo)}
                              style={{ marginRight: '5px', padding: '5px 10px' }}
                            >
                              Edit
                            </button>
                          )
                    }
                    <button
                        onClick={() => handleDeleteClick(todo.id)}
                        style={{ padding: '5px 10px' }}
                    >
                        Delete
                    </button>
                </div>
            </div>
            
        )) : <div>- No todos available</div>}
        </>
    );

}


export default TodoList
