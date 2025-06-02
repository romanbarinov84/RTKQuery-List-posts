import { postsApi } from "./services/postsApi";
import { useGetPostsByIdQuery,useGetPostsQuery,useCreatedPostsMutation,useUpdatedPostsMutation,useDeletedPostsMutation } from "./services/postsApi";



function App() {
 const {data:posts, isLoading , error} = useGetPostsQuery();



  return (
    <>
    <div style={{ padding: "2rem" }}>
      <h1>Posts from rtk query</h1>
      {posts && <ul>
        {
          posts.map((post) => (
            <li key={post.id}>
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
