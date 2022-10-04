import Header from './Header';
import {Route,Switch,useHistory} from 'react-router-dom'
import {usestate,useEffect} from 'react'
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import About from './About';
import Footer from './Footer';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Header title={"React Js Blog"}></Header>
      <Nav></Nav>

      <Switch>

          <Route exact  path="/">
            <Home/>
          </Route>
             
          <Route exact path="/post">
              <NewPost/>
          </Route>

          <Route path="/post/:id">
              <PostPage/>
          </Route>
          
          <Route path="/about" component={About}/>

          <Route path= "*" component={Missing}/>

      </Switch>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
