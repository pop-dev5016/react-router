import Header from './Header';
import {Route,Switch,useHistory} from 'react-router-dom'
import {useState,useEffect} from 'react'
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import About from './About';
import Footer from './Footer';
import Home from './Home'

function App() {
  const [search,setSearch] = useState("")
  const [searchResults,setSearchResults] = useState([])
  const [posts,setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
  const history = useHistory()
  const handleDelete = (id) =>{
    const postslist = posts.filter(post=>post.id !== id)
    setPosts(postslist)
    history.push('/')
  }
  return (
    <div className="App">
      <Header title={"React Js Blog"}></Header>
      <Nav search={search} setSearch={setSearch}></Nav>

      <Switch>

          <Route exact  path="/">
            <Home posts={posts}/>
          </Route>
             
          <Route exact path="/post">
              <NewPost/>
          </Route>

          <Route path="/post/:id">
              <PostPage posts={posts} handleDelete={handleDelete}/>
          </Route>
          
          <Route path="/about" component={About}/>

          <Route path= "*" component={Missing}/>

      </Switch>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
