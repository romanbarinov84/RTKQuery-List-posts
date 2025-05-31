import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { InputTask } from "./components/InputTask";


function App() {
  const [text , setText] = useState("")
  const [todos , setTodos] = useState([]);

  const handleChange = (task) => {
    setText(task)
  }

  const addTodo = () => {
    if(text.trim()){
      setTodos([...todos, {id:Date.now(), text: text, completed: false}])
    }
    setText("")
    console.log(todos);
    
  }

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => {
      if(todo.id !== id) return todo;
      return {
        ...todo,
        completed: !todo.completed,
      }
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

 
  return (
    <>
      <div style={{ marginLeft: "50px" }}>
        <h1>TodoList from Redux</h1>
        <InputTask addTodo={addTodo} handleChange={handleChange} text={text}/>
         <TodoList   todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete}  />
      </div>
    </>
  );
}

export default App;
