import { useEffect } from "react"
import React from 'react'
import { useParams,Link } from "react-router-dom"


const Editposts = ({posts,handleEdit,editbody,setEditBody,editTitle,setEditTitle}) => {
    const {id} = useParams();
    const post = posts.find(post=>(post.id).toString()===id);

    useEffect(()=>{

        if(post){
            setEditBody(post.title)
            setEditBody(post.body)
        }
      
    },[posts,setEditTitle,setEditBody])

    return(
        <main className='NewPost'>
            {editTitle &&
             <>
                    <h2> edit Post </h2>
                    <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
                            <label htmlFor='postTitle'>Title:</label>
                            <input 
                            id="postTitle"
                            type="text"
                            required
                            value={editTitle}
                            onChange={(e)=>setEditTitle(e.target.value)}
                            />
                            <label htmlFor='postBody'>Post:</label>
                            <textarea 
                            id="postBody"
                            required
                            value={editbody}
                            onChange={(e)=>setEditBody(e.target.value)}
                            >
                            </textarea>
                            <button type='submit' onClick={()=>handleEdit(post.id)}>Submit</button>
                    </form>
                </>
               }
               {!editTitle && 
                    <>
                      <h2> post not found </h2>
                      <p>well,that's disappointing..</p>
                      <p>
                        <Link to = '/'>visit our homepage</Link>
                      </p>
                    </>                       }
    </main>
            
   
   
  )


}


export default Editposts