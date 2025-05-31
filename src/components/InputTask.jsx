 
export const InputTask = ({addTodo,handleChange, text}) => {

    return (
        <>
          <label style={{border:"2px solid black",display:"flex",padding:"50px",borderRadius:"10px" , backgroundColor:"#f3c5c5"}}>
                  <input style={{width:"600px"}} type="text" value={text} onChange={(event) => handleChange(event.target.value)}/>
                  <button onClick={addTodo}>Добавить задачу</button>
                  </label>
        </>
    )
}