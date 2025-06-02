import { postsApi } from "./services/postsApi";
import { useGetPostsByIdQuery,useGetPostsQuery,useCreatedPostsMutation,useUpdatedPostsMutation,useDeletedPostsMutation } from "./services/postsApi";



function App() {
 const {data:posts, isLoading , error} = useGetPostsQuery();



  return (
    <>
    <div style={{ padding: "2rem",border:"5px solid green",marginLeft:"50px",textAlign:"center",background:"lightgray",boxShadow:"3px 4px 4px 2px #333" }}>
      <h1>Posts from rtk query</h1>
      {posts && <ul style={{border:"3px solid #333",padding:"10px",background:"lightblue"}}>
        {
          posts.map((post) => (
            <li style={{listStyleType:"none",marginBottom:"5px",background:"wheat"}} key={post.id} >
              <div style={{display:"flex",flexDirection:"column",border:"2px solid gray",padding:"10px"}}>
              <strong style={{color:"cornflowerblue",fontSize:"30px"}}>{post.title}</strong>
              <p>{post.body}</p>
              </div>
              
            </li>
          ))
        }</ul>}
      </div>;
    </>
  )
}

export default App;
