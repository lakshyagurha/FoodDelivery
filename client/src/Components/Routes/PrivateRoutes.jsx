import React, { children } from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({ children }) => {
    const Token = localStorage.getItem('token');
    if(Token)
    {
        return children
    }
    else{
       return <Navigate to ="/" />
    }

  return (
    <>
    
    </>
  )
}
