

export const TodoItem = ({todo, deleteTodo, toggleComplete}) => {

    return (
        <>
        <div>
             <li style={{border:"2px solid black",padding:"20px", alignItems:"center",display:"flex",justifyContent:"space-between"}} key={todo.id}>
                  <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
                    <p style={todo.completed ? {textDecoration:"line-through", color:"red",fontSize:"30px"} : {color:"green",fontSize:"30px"} }>{todo.text}</p>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button></li>
        </div>
        </>
    )
}