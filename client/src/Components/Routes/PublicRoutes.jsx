import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({ children }) => {
    const Token = localStorage.getItemI('token');
    if(Token){
        return <Navigate to='/' />
    }
    else{
        return children
    }
  return (
    <>



    





    </>
  )
}
