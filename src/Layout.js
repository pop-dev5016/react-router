import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({search,setSearch}) => {
  return (
    
      <div className="App">
            <Header title={"React Js Blog"}></Header>
            <Nav search={search} setSearch={setSearch}></Nav>
            <Outlet/>
            <Footer></Footer>

    </div>
  )
}

export default Layout