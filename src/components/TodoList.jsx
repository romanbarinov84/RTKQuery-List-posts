

export default function TodoList(){

    return (
        <>
        <div style={{marginTop:"50px",border:"2px solid gray",padding:"20px",borderRadius:"10px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <input style={{transform:"scale(2.5)"}} type="checkbox" />
            <span style={{display:"flex",alignItems:"center",fontSize:"30px"}}>Задача</span>
            <button>Удалить</button>
            </div>
            
        </div>
        </>
    )
}