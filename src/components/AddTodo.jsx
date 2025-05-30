import { useState } from "react"

export default function AddTodo(){
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault()
      if(text.trim()){

        setText("")
      }
    }

    return (
        <>
        <div>
         <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Добавить</button>
         </form>
        </div>
        </>
    )
}