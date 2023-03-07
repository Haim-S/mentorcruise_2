import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../components/layout/Layout";
import { mainRoutes, footerRoutes } from "../pages/import";
import ProtectedRoute from "./ProtectedRoute";

function App({children}) {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        {mainRoutes.map((route, index) => {
          return(
            
            <Route
            path={route.path}
            element={
              route.isProtected ? (
                <ProtectedRoute>
                  <route.component/>
                </ProtectedRoute>
              ) : (
                <route.component/>
              )
            }
            key={index}
            />
           
          );
        })}
        {footerRoutes.map((route, index)=>{
          return(
            <Route
            path={route.path}
            element={
              route.isProtected ? (
                <ProtectedRoute>
                  <route.component/>
                </ProtectedRoute>
              ) : (
                {children}
              )
            }
            key={index}
            />
          )
        })}
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
