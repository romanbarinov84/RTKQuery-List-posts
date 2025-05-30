import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";



function App() {
  return (
  <>
  <div style={{marginLeft:"50px"}}>
    <h1>TodoList from Redux</h1>
    <AddTodo/>
    <TodoList/>
  </div>
  </>
  );
}

export default App;
