import Header from './Header';
import Layout from './Layout';
import {Route,Routes,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import About from './About';
import Footer from './Footer';
import Home from './Home'
import {format} from "date-fns"
import Api from './Api/posts'

function App() {
  
  const [posts,setPosts] = useState([])
  const [search,setSearch] = useState("")
  const [searchResults,setSearchResults] = useState([])
  const [postTitle,setPostTitle]=useState('')
  const [postbody,setPostBody]=useState('')
  const navigate = useNavigate()

  useEffect(()=>{
     const filteredresults = posts.filter((post)=>
        ((post.body).toLowerCase()).includes(search.toLowerCase())
     || ((post.title).toLowerCase()).includes(search.toLowerCase()) )

     setSearchResults(filteredresults.reverse())
  },[posts,search])


  useEffect(()=>{
    const fetchposts = async ()=>{
      try{
        const response = await Api.get('/posts')
        setPosts(response.data)
      }catch (err){
          //not in 200 range
          if(err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          }else{
            console.log(`Error:${err.message}`);
          }
      }
    }
    fetchposts()
  },[])






  const handleDelete = async (id) =>{
    try{
      await Api.delete(`/posts/${id}`)
    const postslist = posts.filter(post=>post.id !== id)
    setPosts(postslist)
    navigate.push('/')
    }catch(err){
      console.log(`Error:${err.message}`);
    }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const id = posts.length ? posts[posts.length-1].id + 1 :1
    const datetime = format(new Date(),"MMMM dd,yyyy pp");
    const newpost = {id,title: postTitle,datetime,body:postbody}
    try {
    const response = await Api.post("/posts",newpost)
    const allpost = [...posts,response.data]
    setPosts(allpost)
    setPostTitle("")
    setPostBody("")
    navigate.push('/')
    }catch(err){
      console.log(`Error:${err.message}`);
    }
  }

  return (
    

      <Routes>

          <Route  path="/" element={<Layout
                          search={search}
                          setSearch={setSearch}
                          />}>



                          <Route  index element = {<Home posts={searchResults}/>}/>  

                          <Route path = "post">
                          
                                  <Route  index element ={<NewPost 
                                      handleSubmit={handleSubmit}
                                      postTitle={postTitle}
                                      setPostTitle={setPostTitle}
                                      postbody={postbody}
                                      setPostBody={setPostBody}
                                    />}/>

                                  <Route path=":id" element = {<PostPage
                                  posts={posts} 
                                  handleDelete={handleDelete}
                                  />}/>

                        </Route>
                        
                        <Route path="about" element ={<About/>}/>

                        <Route path= "*" element={<Missing/>}/>

          </Route>

      </Routes>

     

    
  )
}

export default App;
