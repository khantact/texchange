import React, {useContext} from 'react'
import { AuthContext } from '../context/auth'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
  const {user} = useContext(AuthContext)
  
  return user ? <Outlet/> : <Navigate to='/Login'/>;
}

export default PrivateRoute