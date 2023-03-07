import React , { Suspense } from 'react'
import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {Outlet} from 'react-router-dom';
import {useLocation} from "react-router-dom"
import "./layout.css";

const Layout = () => {


  let location = useLocation();

  return (
    <>
    {location.pathname == "/login" ?  "" : <Navbar/>}
    {location.pathname == "/login" ? "" :  <Header/>}
    {location.pathname == "/login" ? <Outlet/> :
    <Suspense fallback={<h1>loading.....</h1>}> 
    <main>
      <Outlet/>
    </main>
    </Suspense>
    }
    {location.pathname == "/login" ? "" :  <Footer/>}
    </>
  )
}

export default Layout