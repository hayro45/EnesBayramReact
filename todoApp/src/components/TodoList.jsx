
import './todo.css'

function TodoList({ todos, handleDelete, handleCompleted }) {
    const handleDeleteClick = (id) => {
        handleDelete(id);
    }
    const handleCompletedClick = (id) => {
        console.log(id ? true : false);
        handleCompleted(id);
    }

    return (
        <>
        {todos && todos.length > 0 ? todos.map(todo => (
            <>

            <div className='todo-list-container' key={todo.id}>
                <input 
                    className='todo-checkbox'
                    type="checkbox" 
                    key={`checkbox-${todo.id}`}
                    name={`isCompleted-${todo.id}`}
                    checked={todo.isCompleted} 
                    onChange={() => handleCompletedClick(todo.id)}
                />
                <div style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} key={`title-${todo.id}`}>{todo.title}</div>
                <div key={`buttons-${todo.id}`}>
                    <button style={{ marginRight: '5px', padding: '5px 10px', }}>Edit</button>
                    <button onClick={() => handleDeleteClick(todo.id)} style={{ padding: '5px 10px', }}>Delete</button>
                </div>
            </div>
            </>
        )) : <div>- No todos available</div>}
        </>
    );

}


export default TodoList
