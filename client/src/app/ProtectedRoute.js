import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

// const {isAuth} = useSelector((state)=> state.auth);
const isAuth = false;

  return (
   isAuth ? children : <Navigate to="/login" replace/>
  )
}

export default ProtectedRoute