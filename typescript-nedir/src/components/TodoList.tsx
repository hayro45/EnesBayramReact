import './todo.css'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import { useState } from 'react';
import type { TodoType } from '../types/Types';
import { deleteTodo, toggleTodo, updateTodo } from '../redux/todoSlice';

function TodoList() {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [whichEditId, setWhichEditId] = useState<number | null>(null);
    const [editText, setEditText] = useState<string>('');
    const {todos} = useSelector((state: RootState) => state.todo);
   
    const handleCompletedClick = (id: number) => {
        // Toggle the isCompleted status of the todo with the given id
        dispatch(toggleTodo(id));
    };
   
    const handleSaveClick = (id: number) => {
        // Save the edited text for the todo with the given id
        if (editText.trim().length > 0) {
            dispatch(updateTodo({ id, text: editText }));
        }
        setIsEdit(false);
        setWhichEditId(null);
        setEditText('');
    };
   
    const handleDeleteClick = (id: number) => {
        // Dispatch an action to delete the todo with the given id
        dispatch(deleteTodo(id));
    };
   
    const handleEditClick = (todo: TodoType) => {
        // Set the todo in edit mode
        setIsEdit(true);
        setWhichEditId(todo.id);
        setEditText(todo.text);
    }
   
    return (
        <>
        {todos && todos.length > 0 ? todos.map(todo => (

            <div 
              className='todo-list-container' 
              style={todo.isCompleted ? { opacity: 0.5, border: '1px solid #4CAF50' } : {}} key={todo.id}>
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
                        ) : todo.text}

                </div>
                <div key={`buttons-${todo.id}`}>
                    {isEdit && whichEditId === todo.id
                        ? (
                            <button
                              onClick={() => handleSaveClick(todo.id)}
                              style={{ marginRight: '5px', padding: '5px 10px' }}
                            >
                              Kaydet
                            </button>
                          )
                        : (
                            <button
                              onClick={() => handleEditClick(todo)}
                              style={{ marginRight: '5px', padding: '5px 10px' }}
                            >
                              Düzenle
                            </button>
                          )
                    }
                    <button
                        onClick={() => handleDeleteClick(todo.id)}
                        style={{ padding: '5px 10px' }}
                    >
                        Sil
                    </button>
                </div>
            </div>

        )) : <div>- Hiç bir yapılacak madde yok</div>}
        </>
    );
}

export default TodoList
