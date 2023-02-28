import React from 'react'
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
    {!location.pathname === "/login" && <Navbar/>}
    {!location.pathname === "/login" &&  <Header/>}
    {!location.pathname !== "/login" ? <Outlet/> :
    <main>
      <Outlet/>
    </main>
    }
    {!location.pathname === "/login" &&  <Footer/>}
    </>
  )
}

export default Layout