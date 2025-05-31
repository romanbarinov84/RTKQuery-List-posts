import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos,deleteTodo , toggleComplete, }) => {

    return(
        <>
         <div style={{marginLeft:"100px"}}>
            <ul>
              {todos.map((todo) => (
                <TodoItem key={todo.id} todos={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete}/>
               
              ))}
            </ul>
          </div>
        </>
    )
}