
import './todo.css'

function TodoList({ todos, handleDelete }) {
    const handleDeleteClick = (id) => {
        handleDelete(id);
    }

    return (
        <>
        {todos && todos.length > 0 ? todos.map(todo => (
            <>

            <div className='todo-list-container' key={todo.id}>
                <input 
                    className='todo-checkbox'
                    type="checkbox" 
                    key={todo.id}
                    name={`isCompleted-${todo.id}`}
                    value={todo.isCompleted} 
                />
                <div>{todo.title}</div>
                <div>
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
