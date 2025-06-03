import { useState } from "react";
import { useGetPostsByIdQuery,useGetPostsQuery,usePrefetch } from "./services/postsApi";



function App() {
  const [postId , setPostId] = useState(1);
 const {data:posts, isLoading , error} = useGetPostsQuery();
 const [hoverPostsId , setHoverPostsId] = useState(null)


  const validPostId = postId > 0 ? postId : undefined;
 const {data:post, isLoading: isLoadingPost , error:isError} = useGetPostsByIdQuery(postId,{
  
  pollingInterval: 10000, //обновленние данных каждые 10 сек
  skipPollingIfUnfocused: true,// отмена обновления если закрыть вкладку или выйти
  skip:!validPostId,
 });

  if(isLoading || isLoadingPost) return <div><h1>Загрузка данных</h1></div>
  if(error || isError) return <div><p>Ошибка : {error.status}</p></div>


  const handleChange = (event) => {
   const val = (Number(event.target.value))
    if(val > 0) {
       setPostId(val)
    }else{
      setPostId("")
    }
    
  }

 const prefetchPosts = usePrefetch("getPostsById")

  return (
    <>
    <div style={{ padding: "2rem",border:"5px solid green",marginLeft:"50px",textAlign:"center",background:"lightgray",boxShadow:"3px 4px 4px 2px #333" }}>
      <h1>Posts from rtk query</h1>
      <input type="number" value={postId} onChange={handleChange} min={1}/>

      <h2>Один пост</h2>

        {postId > 0 && post ? (<div style={{padding:"10px",border:"2px solid black",background:"wheat"}}>
          <strong style={{color:"cornflowerblue",fontSize:"30px"}}>{post.title}</strong>
          <p>{post.body}</p>
          </div>) : (<div><h2>Ведите число больше 0</h2></div>)}
       



      <h2>все посты</h2>
      {posts && <ul style={{border:"3px solid #333",padding:"10px",background:"lightblue"}}>
        {
          posts.map((post) => (
            <li style={{listStyleType:"none",marginBottom:"5px",background:"wheat"}} key={post.id} 
               onMouseEnter={() => {setHoverPostsId(post.id),prefetchPosts(post.id)} } onMouseLeave={() => setHoverPostsId(null)}>
                {hoverPostsId === post.id && (<div>
                  {post.id}
                </div>)}
              <div style={{display:"flex",flexDirection:"column",border:"2px solid gray",padding:"10px"}}>
              <strong style={{color:"cornflowerblue",fontSize:"30px"}}>{post.title}</strong>
              <p>{post.body}</p>
              </div>
              
            </li>
          ))
        }</ul>}

       
        
      </div>
    </>
  )
}

export default App;
